// attendanceTypesRouter.js
const express = require("express");
const {
  createAttendanceType,
  getAllAttendanceTypes,
  getAttendanceTypesById,
  getAttendanceTypeByType,
  updateAttendanceType,
  deleteAttendanceType,
  seedAttendanceTypes,
} = require("../controllers/attendanceTypesController");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.get("/attendancetypes/seed", seedAttendanceTypes);
router.put("/attendancetypes/create", authMiddleware, createAttendanceType);
router.get("/attendancetypes/all", getAllAttendanceTypes);
router.post("/attendancetypes/id", getAttendanceTypesById);
router.post("/attendancetypes/type", getAttendanceTypeByType);
router.patch("/attendancetypes/id", authMiddleware, updateAttendanceType);
router.delete("/attendancetypes/id", authMiddleware, deleteAttendanceType);

module.exports = router;
