// companiesRouter.js
const express = require("express");
const {
  createCompany,
  getAllCompanies,
  getCompanyById,
  getCompanyByName,
  updateCompany,
  deleteCompany,
  seedCompanies,
} = require("../controllers/companiesController");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.get("/companies/seed", seedCompanies);
router.put("/companies/create", authMiddleware, createCompany);
router.get("/companies/all", getAllCompanies);
router.post("/companies/id", getCompanyById);
router.post("/companies/name", getCompanyByName);
router.patch("/companies/id", authMiddleware, updateCompany);
router.delete("/companies/id", authMiddleware, deleteCompany);

module.exports = router;
