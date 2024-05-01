// usersRouter.js
const express = require("express");
const {
  seedReports,
  createReport,
  getAllReports,
  getAllReportsByCompany,
  getAllReportsFormatCompany,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controllers/reportsController");
const router = express.Router();

router.get("/report/seed", seedReports);
router.put("/report/create", createReport);
router.get("/report/all", getAllReports);
router.post("/report/all/company", getAllReportsByCompany);
router.post("/report/all/formatcompany", getAllReportsFormatCompany);
router.post("/report/id", getReportById);
router.patch("/report/id", updateReport);
router.delete("/report/id", deleteReport);

module.exports = router;
