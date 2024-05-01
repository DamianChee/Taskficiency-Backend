// reportFormatsController.js
const { ReportFormats } = require("../db/Index");

// Seed report formats
const seedReportFormats = async (req, res) => {
  try {
    const formats = await ReportFormats.bulkCreate([
      { format: {}, company_id: 1, created_by: 1 },
      { format: {}, company_id: 2, created_by: 1 },
      { format: {}, company_id: 3, created_by: 1 },
    ]);

    res
      .status(200)
      .json({ status: "ok", msg: "seed completed", data: formats });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in seeding report formats",
      data: error.message,
    });
  }
};

// Create a new format
const createFormat = async (req, res) => {
  try {
    const newFormat = await ReportFormats.create(req.body);

    res
      .status(200)
      .json({ status: "ok", msg: "format created", data: newFormat });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating format",
      data: error,
    });
  }
};

// Get all formats
const getAllFormats = async (req, res) => {
  try {
    const formats = await ReportFormats.findAll({});

    res
      .status(200)
      .json({ status: "ok", msg: "formats returned", data: formats });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting formats",
      data: error.message,
    });
  }
};

// get all formats made by a company
const getAllFormatsByCompany = async (req, res) => {
  try {
    const formats = await ReportFormats.findAll({
      where: {
        company_id: req.body.company_id,
      },
    });

    res.status(200).json({ status: "ok", msg: "formats found", data: formats });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting format",
      data: error.message,
    });
  }
};

// Get format by id (primary key)
const getFormatById = async (req, res) => {
  try {
    const format = await ReportFormats.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "format found", data: format });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting format",
      data: error.message,
    });
  }
};

// Get format by name
const getFormatByName = async (req, res) => {
  try {
    const format = await ReportFormats.findOne({
      where: {
        name: req.body.name,
      },
    });

    res.status(200).json({ status: "ok", msg: "format found", data: format });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting format",
      data: error.message,
    });
  }
};

// Update format by id
const updateFormat = async (req, res) => {
  try {
    const format = await ReportFormats.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "format updated", data: format });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating format",
      data: error.message,
    });
  }
};

// Delete format by id
const deleteFormat = async (req, res) => {
  try {
    const format = await ReportFormats.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "format deleted", data: format });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting format",
      data: error.message,
    });
  }
};

module.exports = {
  seedReportFormats,
  createFormat,
  getAllFormats,
  getAllFormatsByCompany,
  getFormatById,
  getFormatByName,
  updateFormat,
  deleteFormat,
};
