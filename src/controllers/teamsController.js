// controllers/teamsController.js
const { Teams } = require("../db/Index");

// Create a new team
const createTeam = async (req, res) => {
  try {
    const newTeam = await Teams.create(req.body);

    res.status(200).json({ status: "ok", msg: "team created", data: newTeam });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating team",
      data: error.message,
    });
  }
};

// Get all teams
const getAllTeams = async (req, res) => {
  try {
    const teams = await Teams.findAll({});

    res.status(200).json({ status: "ok", msg: "teams returned", data: teams });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting team",
      data: error.message,
    });
  }
};

// Get all teams by company
const getAllTeamsByCompany = async (req, res) => {
  try {
    const teams = await Teams.findAll({
      where: {
        company_id: req.body.company_id,
      },
    });

    res.status(200).json({ status: "ok", msg: "teams returned", data: teams });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting team",
      data: error.message,
    });
  }
};

// Get team by id (primary key)
const getTeamById = async (req, res) => {
  try {
    const team = await Teams.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "team found", data: team });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting team",
      data: error.message,
    });
  }
};

// Get team by name
const getTeamByName = async (req, res) => {
  try {
    const team = await Teams.findOne({
      where: {
        name: req.body.name,
      },
    });

    res.status(200).json({ status: "ok", msg: "team found", data: team });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting team",
      data: error.message,
    });
  }
};

// Update team by id
const updateTeam = async (req, res) => {
  try {
    const team = await Teams.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "team updated", data: team });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating team",
      data: error.message,
    });
  }
};

// Delete team by id
const deleteTeam = async (req, res) => {
  try {
    const team = await Teams.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "team deleted", data: team });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting team",
      data: error.message,
    });
  }
};

module.exports = {
  createTeam,
  getAllTeams,
  getAllTeamsByCompany,
  getTeamById,
  getTeamByName,
  updateTeam,
  deleteTeam,
};
