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

router.get("/reports/seed", seedReports);
router.put("/reports/create", createReport);
router.get("/reports/all", getAllReports);
router.post("/reports/all/company", getAllReportsByCompany);
router.post("/reports/all/formatcompany", getAllReportsFormatCompany);
router.post("/reports/id", getReportById);
router.patch("/reports/id", updateReport);
router.delete("/reports/id", deleteReport);

module.exports = router;
