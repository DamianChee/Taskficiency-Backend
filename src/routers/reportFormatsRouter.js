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

router.get("/format/seed", seedReportFormats);
router.put("/format/create", createFormat);
router.get("/format/all", getAllFormats);
router.post("/format/all/company", getAllFormatsByCompany);
router.post("/format/id", getFormatById);
router.post("/format/name", getFormatByName);
router.patch("/format/id", updateFormat);
router.delete("/format/id", deleteFormat);

module.exports = router;
