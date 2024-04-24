// controllers/attendancesController.js
const { Op } = require("sequelize");
const Attendances = require("../models/Attendance");

// Create a new attendance
const createAttendance = async (req, res) => {
  try {
    const newAttendance = await Attendances.create(req.body);
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance created", data: newAttendance });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating attendance",
      data: error.message,
    });
  }
};

// Get all attendances
const getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendances.findAll({});
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendances returned", data: attendances });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendances",
      data: error.message,
    });
  }
};

// Get all attendances by company
const getAllAttendancesByCompany = async (req, res) => {
  try {
    const attendances = await Attendances.findAll({
      where: {
        company_id: req.body.company_id,
      },
    });
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendances returned", data: attendances });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendances",
      data: error.message,
    });
  }
};

// Get all attendances by company and date
const getAllAttendancesByCompanyDate = async (req, res) => {
  try {
    const attendances = await Attendances.findAll({
      where: {
        date: {
          [Op.between]: [req.body.startDate, req.body.endDate],
        },
        company_id: req.body.company_id,
      },
    });
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendances returned", data: attendances });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendances",
      data: error.message,
    });
  }
};

// Get attendances by user id
const getAllAttendancesByUserIdCompany = async (req, res) => {
  try {
    const attendances = await Attendances.findAll({
      where: {
        user_id: req.body.user_id,
        company_id: req.body.company_id,
      },
    });
    if (res.ok && attendances) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendances found", data: attendances });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "attendances not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendances",
      data: error.message,
    });
  }
};

// Get attendance by id (primary key)
const getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendances.findByPk(req.body.id);
    if (res.ok && attendance) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance found", data: attendance });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "attendance not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendance",
      data: error.message,
    });
  }
};

// Get attendances by user id
const getAttendanceByUserIdDate = async (req, res) => {
  try {
    const attendances = await Attendances.findAll({
      where: {
        user_id: req.body.user_id,
        date: {
          [Op.between]: [req.body.startDate, req.body.endDate],
        },
      },
    });
    if (res.ok && attendances) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendances found", data: attendances });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "attendances not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting attendances",
      data: error.message,
    });
  }
};

// Update attendance by id
const updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendances.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    if (res.ok && attendance) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance updated", data: attendance });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "attendance not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating attendance",
      data: error.message,
    });
  }
};

// Delete attendance by id
const deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendances.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (res.ok && attendance) {
      res
        .status(200)
        .json({ status: "ok", msg: "attendance deleted", data: attendance });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "attendance not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting attendance",
      data: error.message,
    });
  }
};

module.exports = {
  createAttendance,
  getAllAttendance,
  getAllAttendancesByCompany,
  getAllAttendancesByCompanyDate,
  getAllAttendancesByUserIdCompany,
  getAttendanceById,
  getAttendanceByUserIdDate,
  updateAttendance,
  deleteAttendance,
};
