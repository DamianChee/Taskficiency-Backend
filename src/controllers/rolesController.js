// controllers/rolesController.js
const Roles = require("../models/Roles");

// Create a new role
const createRole = async (req, res) => {
  try {
    const newRole = await Roles.create(req.body);
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "role created", data: newRole });
    }
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
    const roles = await Roles.findAll({});
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "roles returned", data: roles });
    }
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
    if (res.ok && role) {
      res.status(200).json({ status: "ok", msg: "role found", data: role });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "role not found" });
    }
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
    if (res.ok && role) {
      res.status(200).json({ status: "ok", msg: "role found", data: role });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "role not found" });
    }
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

    if (res.ok && role) {
      res.status(200).json({ status: "ok", msg: "role updated", data: role });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "role not found" });
    }
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
    if (res.ok && role) {
      res.status(200).json({ status: "ok", msg: "role deleted", data: role });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "role not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting role",
      data: error.message,
    });
  }
};

module.exports = {};
