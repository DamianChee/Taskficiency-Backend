// controllers/attendancesController.js
const { Op } = require("sequelize");
const { Attendances } = require("../db/Index");

// Seed attendances
const seedAttendance = async (req, res) => {
  try {
    const attendances = await Attendances.bulkCreate([
      {
        date: "2024-04-22",
        clock_out: "18:00:00",
        user_id: 1,
        company_id: 1,
        attendance_type_id: 1,
      },
      {
        date: "2024-04-23",
        clock_out: "18:00:00",
        user_id: 1,
        company_id: 1,
        attendance_type_id: 1,
      },
      {
        date: "2024-04-24",
        clock_out: "18:00:00",
        user_id: 1,
        company_id: 1,
        attendance_type_id: 1,
      },
      {
        date: "2024-04-25",
        clock_out: "18:00:00",
        user_id: 1,
        company_id: 1,
        attendance_type_id: 1,
      },
    ]);

    res
      .status(200)
      .json({ status: "ok", msg: "seed successful", data: attendances });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating attendance",
      data: error.message,
    });
  }
};

// Create a new attendance
const createAttendance = async (req, res) => {
  try {
    const newAttendance = await Attendances.create(req.body);

    res
      .status(200)
      .json({ status: "ok", msg: "attendance created", data: newAttendance });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendances returned", data: attendances });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendances returned", data: attendances });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendances returned", data: attendances });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendances found", data: attendances });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendance found", data: attendance });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendances found", data: attendances });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendance updated", data: attendance });
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

    res
      .status(200)
      .json({ status: "ok", msg: "attendance deleted", data: attendance });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting attendance",
      data: error.message,
    });
  }
};

// Clock in via user id
const clockIn = async (req, res) => {
  try {
    const attendance = await Attendances.create({
      clock_out: "18:00:00",
      user_id: req.body.user_id,
      company_id: req.body.company_id,
      attendance_type_id: 1,
    });

    res.status(200).json({ status: "ok", msg: "clocked in", data: attendance });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating attendance",
      data: error.message,
    });
  }
};

// Clock in via user id
const clockOut = async (req, res) => {
  try {
    const attendance = await Attendances.update(
      {
        clock_out: req.body.clock_out,
      },
      {
        where: {
          user_id: req.body.user_id,
          date: req.body.date,
        },
      }
    );

    res
      .status(200)
      .json({ status: "ok", msg: "clocked out", data: attendance });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating attendance",
      data: error.message,
    });
  }
};

// Clock in via user id
const OTIn = async (req, res) => {
  try {
    const attendance = await Attendances.update(
      {
        OT_clock_in: req.body.OT_clock_in,
      },
      {
        where: {
          user_id: req.body.user_id,
          date: req.body.date,
        },
      }
    );

    res
      .status(200)
      .json({ status: "ok", msg: "OT clocked in", data: attendance });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating attendance",
      data: error.message,
    });
  }
};

// Clock in via user id
const OTOut = async (req, res) => {
  try {
    const attendance = await Attendances.update(
      {
        OT_clock_out: req.body.OT_clock_out,
      },
      {
        where: {
          user_id: req.body.user_id,
          date: req.body.date,
        },
      }
    );

    res
      .status(200)
      .json({ status: "ok", msg: "OT clocked out", data: attendance });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating attendance",
      data: error.message,
    });
  }
};

module.exports = {
  seedAttendance,
  createAttendance,
  getAllAttendance,
  getAllAttendancesByCompany,
  getAllAttendancesByCompanyDate,
  getAllAttendancesByUserIdCompany,
  getAttendanceById,
  getAttendanceByUserIdDate,
  updateAttendance,
  deleteAttendance,
  clockIn,
  clockOut,
  OTIn,
  OTOut,
};
