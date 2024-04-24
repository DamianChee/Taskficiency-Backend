// controllers/usersController.js
const Users = require("../models/Users");

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "user created", data: newUser });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating user",
      data: error.message,
    });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({});
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "users returned", data: users });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting users",
      data: error.message,
    });
  }
};

const getAllUsersByCompany = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        company_id: req.params.id,
      },
    });

    if (res.ok && users) {
      res.status(200).json({ status: "ok", msg: "users found", data: users });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "users not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting users",
      data: error.message,
    });
  }
};

// Get user by id (primary key)
const getUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (res.ok && user) {
      res.status(200).json({ status: "ok", msg: "user found", data: user });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "user not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting user",
      data: error.message,
    });
  }
};

// Get user by company
const getUserByCompany = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        name: req.params.name,
        company_id: req.params.name,
      },
    });
    if (res.ok && users) {
      res.status(200).json({ status: "ok", msg: "users found", data: users });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "users not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting users",
      data: error.message,
    });
  }
};

// Update user by id
const updateUser = async (req, res) => {
  try {
    const user = await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (res.ok && user) {
      res.status(200).json({ status: "ok", msg: "user updated", data: user });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "user not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating user",
      data: error.message,
    });
  }
};

// Delete user by id
const deleteUser = async (req, res) => {
  try {
    const user = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (res.ok && user) {
      res.status(200).json({ status: "ok", msg: "user deleted", data: user });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "user not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting user",
      data: error.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getAllUsersByCompany,
  getUserById,
  getUserByCompany,
  updateUser,
  deleteUser,
};
