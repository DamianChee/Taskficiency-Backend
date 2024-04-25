const express = require("express");
const {
  seedAttendance,
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

router.get("/attendances/seed", seedAttendance);
router.post("/attendances/create", createAttendance);
router.get("/attendances/all", getAllAttendance);
router.put("/attendances/all/company", getAllAttendancesByCompany);
router.put("/attendances/all/companydate", getAllAttendancesByCompanyDate);
router.put("/attendances/all/usercompany", getAllAttendancesByUserIdCompany);
router.put("/attendances/id", getAttendanceById);
router.put("/attendances/userdate", getAttendanceById);
router.patch("/attendances/id", updateAttendance);
router.delete("/attendances/id", deleteAttendance);

module.exports = router;
