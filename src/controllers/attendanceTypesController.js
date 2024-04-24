// controllers/attendanceTypeController.js
const AttendanceTypes = require("../models/AttendanceTypes");

// Create a new attendance type
const createAttendanceType = async (req, res) => {
  try {
    const newType = await AttendanceTypes.create(req.body);
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance type created", data: newType });
    }
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
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance types returned", data: types });
    }
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
    const type = await AttendanceTypes.findByPk(req.params.id);
    if (res.ok && type) {
      res.status(200).json({ status: "ok", msg: "type found", data: type });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "type not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting type",
      data: error.message,
    });
  }
};

// Get attendance type by name
const getAttendanceTypeByName = async (req, res) => {
  try {
    const type = await AttendanceTypes.findOne({
      where: {
        name: req.params.name,
      },
    });
    if (res.ok && type) {
      res.status(200).json({ status: "ok", msg: "type found", data: type });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "type not found" });
    }
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
        id: req.params.id,
      },
    });

    if (res.ok && type) {
      res.status(200).json({ status: "ok", msg: "type updated", data: type });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "type not found" });
    }
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
        id: req.params.id,
      },
    });
    if (res.ok && type) {
      res.status(200).json({ status: "ok", msg: "type deleted", data: type });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "type not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting type",
      data: error.message,
    });
  }
};

module.exports = {
  createAttendanceType,
  getAllAttendanceTypes,
  getAttendanceTypesById,
  getAttendanceTypeByName,
  updateAttendanceType,
  deleteAttendanceType,
};
