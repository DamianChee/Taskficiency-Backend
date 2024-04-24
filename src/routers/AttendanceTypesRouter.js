const express = require("express");
const {
  createAttendanceType,
  getAllAttendanceTypes,
  getAttendanceTypesById,
  getAttendanceTypeByName,
  updateAttendanceType,
  deleteAttendanceType,
} = require("../controllers/attendanceTypesController");
const router = express.Router();

router.put("/attendancetype/create", createAttendanceType);
router.get("/attendancetype/all", getAllAttendanceTypes);
router.post("/attendancetype/id", getAttendanceTypesById);
router.post("/attendancetype/name", getAttendanceTypeByName);
router.patch("/attendancetype/id", updateAttendanceType);
router.delete("/attendancetype/id", deleteAttendanceType);

module.exports = router;
