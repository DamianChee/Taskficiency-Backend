const express = require("express");
const {
  createAttendance,
  getAllAttendance,
  getAllAttendancesByCompany,
  getAllAttendancesByCompanyDate,
  getAttendanceById,
  getAllAttendancesByUserIdCompany,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/AttendancesController");
const router = express.Router();

// router.get("/attendances/seed");
router.post("/attendances/create", createAttendance);
router.get("/attendances/all", getAllAttendance);
router.put("/attendance/all/company", getAllAttendancesByCompany);
router.put("/attendance/all/companydate", getAllAttendancesByCompanyDate);
router.put("/attendance/all/usercompany", getAllAttendancesByUserIdCompany);
router.put("/attendance/id", getAttendanceById);
router.put("/attendance/userdate", getAttendanceById);
router.patch("/attendance/id", updateAttendance);
router.delete("/attendance/id", deleteAttendance);

module.exports = router;
