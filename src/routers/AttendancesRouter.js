// attendancesRouter.js
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
  clockIn,
  clockOut,
  OTIn,
  OTOut,
  getAttendanceByUserId,
  getAttendanceByUserIdDate,
} = require("../controllers/attendancesController");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.get("/attendances/seed", seedAttendance);
router.post("/attendances/create", authMiddleware, createAttendance);
router.get("/attendances/all", getAllAttendance);
router.put("/attendances/all/company", getAllAttendancesByCompany);
router.put("/attendances/all/companydate", getAllAttendancesByCompanyDate);
router.put("/attendances/all/usercompany", getAllAttendancesByUserIdCompany);
router.put("/attendances/id", getAttendanceById);
router.post("/attendances/user", getAttendanceByUserId);
router.put("/attendances/userdate", getAttendanceByUserIdDate);
router.patch("/attendances/id", authMiddleware, updateAttendance);
router.delete("/attendances/id", authMiddleware, deleteAttendance);

router.put("/attendances/clockin", authMiddleware, clockIn);
router.put("/attendances/clockout", authMiddleware, clockOut);
router.put("/attendances/otin", authMiddleware, OTIn);
router.put("/attendances/otout", authMiddleware, OTOut);

module.exports = router;
