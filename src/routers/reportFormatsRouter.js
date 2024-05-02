// usersRouter.js
const express = require("express");
const {
  seedReportFormats,
  createFormat,
  getAllFormats,
  getAllFormatsByCompany,
  getFormatById,
  getFormatByName,
  updateFormat,
  deleteFormat,
} = require("../controllers/reportFormatsController");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.get("/formats/seed", seedReportFormats);
router.put("/formats/create", authMiddleware, createFormat);
router.get("/formats/all", getAllFormats);
router.post("/formats/all/company", getAllFormatsByCompany);
router.post("/formats/id", getFormatById);
router.post("/formats/name", getFormatByName);
router.patch("/formats/id", authMiddleware, updateFormat);
router.delete("/formats/id", authMiddleware, deleteFormat);

module.exports = router;
