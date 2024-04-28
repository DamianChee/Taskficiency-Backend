// attendanceTypeController.js
const { AttendanceTypes } = require("../db/Index");

// Seed attendance types
const seedAttendanceTypes = async (req, res) => {
  try {
    const attendanceTypes = await AttendanceTypes.bulkCreate([
      { type: "Full" },
      { type: "Half AM" },
      { type: "Half PM" },
      { type: "OT" },
    ]);

    res
      .status(200)
      .json({ status: "ok", msg: "seed completed", data: attendanceTypes });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in seeding attendance type",
      data: error.message,
    });
  }
};

// Create a new attendance type
const createAttendanceType = async (req, res) => {
  try {
    const newType = await AttendanceTypes.create(req.body);

    res
      .status(200)
      .json({ status: "ok", msg: "attendance type created", data: newType });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating attendance type",
      data: error.message,
    });
  }
};

// Get all attendance types
const getAllAttendanceTypes = async (req, res) => {
  try {
    const types = await AttendanceTypes.findAll({});

    res
      .status(200)
      .json({ status: "ok", msg: "attendance types returned", data: types });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendance types",
      data: error.message,
    });
  }
};

// Get attendance type by id (primary key)
const getAttendanceTypesById = async (req, res) => {
  try {
    const type = await AttendanceTypes.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "type found", data: type });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting type",
      data: error.message,
    });
  }
};

// Get attendance type by name
const getAttendanceTypeByType = async (req, res) => {
  try {
    const type = await AttendanceTypes.findOne({
      where: {
        type: req.body.type,
      },
    });

    res.status(200).json({ status: "ok", msg: "type found", data: type });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting type",
      data: error.message,
    });
  }
};

// Update attendance type by id
const updateAttendanceType = async (req, res) => {
  try {
    const type = await AttendanceTypes.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "type updated", data: type });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating type",
      data: error.message,
    });
  }
};

// Delete attendance type by id
const deleteAttendanceType = async (req, res) => {
  try {
    const type = await AttendanceTypes.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "type deleted", data: type });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting type",
      data: error.message,
    });
  }
};

module.exports = {
  seedAttendanceTypes,
  createAttendanceType,
  getAllAttendanceTypes,
  getAttendanceTypesById,
  getAttendanceTypeByType,
  updateAttendanceType,
  deleteAttendanceType,
};
