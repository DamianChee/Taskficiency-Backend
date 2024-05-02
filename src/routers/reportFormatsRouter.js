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
const router = express.Router();

router.get("/formats/seed", seedReportFormats);
router.put("/formats/create", createFormat);
router.get("/formats/all", getAllFormats);
router.post("/formats/all/company", getAllFormatsByCompany);
router.post("/formats/id", getFormatById);
router.post("/formats/name", getFormatByName);
router.patch("/formats/id", updateFormat);
router.delete("/formats/id", deleteFormat);

module.exports = router;
