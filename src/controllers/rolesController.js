// rolesController.js
const { Roles } = require("../db/Index");

// Seed roles
const seedRoles = async (req, res) => {
  try {
    const roles = await Roles.bulkCreate([
      { name: "admin", permission_level: 0 },
      { name: "boss", permission_level: 1 },
      { name: "manager", permission_level: 2 },
      { name: "team lead", permission_level: 3 },
      { name: "employee", permission_level: 4 },
      { name: "part-time", permission_level: 5 },
    ]);

    res.status(200).json({ status: "ok", msg: "seed successful", data: roles });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating role",
      data: error.message,
    });
  }
};

// Create a new role
const createRole = async (req, res) => {
  try {
    const newRole = await Roles.create(req.body);

    res.status(200).json({ status: "ok", msg: "role created", data: newRole });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating role",
      data: error.message,
    });
  }
};

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll({ order: [["id", "ASC"]] });

    res.status(200).json({ status: "ok", msg: "roles returned", data: roles });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting roles",
      data: error.message,
    });
  }
};

// Get role by id (primary key)
const getRoleById = async (req, res) => {
  try {
    const role = await Roles.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "role found", data: role });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting role",
      data: error.message,
    });
  }
};

// Get role by name
const getRoleByName = async (req, res) => {
  try {
    const role = await Roles.findOne({
      where: {
        name: req.body.name,
      },
    });

    res.status(200).json({ status: "ok", msg: "role found", data: role });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting role",
      data: error.message,
    });
  }
};

// Update role by id
const updateRole = async (req, res) => {
  try {
    const role = await Roles.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "role updated", data: role });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating role",
      data: error.message,
    });
  }
};

// Delete role by id
const deleteRole = async (req, res) => {
  try {
    const role = await Roles.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "role deleted", data: role });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting role",
      data: error.message,
    });
  }
};

module.exports = {
  seedRoles,
  createRole,
  getAllRoles,
  getRoleById,
  getRoleByName,
  updateRole,
  deleteRole,
};
