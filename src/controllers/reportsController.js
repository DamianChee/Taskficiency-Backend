// reportFormatsController.js
const { Reports } = require("../db/Index");

// Seed report formats
const seedReports = async (req, res) => {
  try {
    const reports = await Reports.bulkCreate([
      { report: [], reportId: 1, company_id: 1, created_by: 1 },
      { report: [], reportId: 1, company_id: 1, created_by: 2 },
      { report: [], reportId: 1, company_id: 1, created_by: 1 },
    ]);

    res
      .status(200)
      .json({ status: "ok", msg: "seed completed", data: reports });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in seeding reports",
      data: error.message,
    });
  }
};

// Create a new report
const createReport = async (req, res) => {
  try {
    const newReport = await Reports.create(req.body);

    res
      .status(200)
      .json({ status: "ok", msg: "report created", data: newReport });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating report",
      data: error.message,
    });
  }
};

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Reports.findAll({});

    res
      .status(200)
      .json({ status: "ok", msg: "reports returned", data: reports });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting reports",
      data: error.message,
    });
  }
};

// Get all reports of one type from a company
const getAllReportsFormatCompany = async (req, res) => {
  try {
    const reports = await Reports.findAll({
      where: {
        report_id: req.body.report_id,
        company_id: req.body.company_id,
      },
    });

    res
      .status(200)
      .json({ status: "ok", msg: "reports returned", data: reports });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting reports",
      data: error.message,
    });
  }
};

// Get all reports from a company
const getAllReportsByCompany = async (req, res) => {
  try {
    const reports = await Reports.findAll({
      where: {
        company_id: req.body.company_id,
      },
    });

    res.status(200).json({ status: "ok", msg: "reports found", data: reports });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting reports",
      data: error.message,
    });
  }
};

// Get report by id (primary key)
const getReportById = async (req, res) => {
  try {
    const report = await Reports.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "report found", data: report });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting report",
      data: error.message,
    });
  }
};

// Update report by id
const updateReport = async (req, res) => {
  try {
    const report = await Reports.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "report updated", data: report });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating report",
      data: error.message,
    });
  }
};

// Delete report by id
const deleteReport = async (req, res) => {
  try {
    const report = await Reports.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: "ok", msg: "report deleted", data: report });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting report",
      data: error.message,
    });
  }
};

module.exports = {
  seedReports,
  createReport,
  getAllReports,
  getAllReportsByCompany,
  getAllReportsFormatCompany,
  getReportById,
  updateReport,
  deleteReport,
};
