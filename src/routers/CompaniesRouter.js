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
const router = express.Router();

router.get("/companies/seed", seedCompanies);
router.put("/companies/create", createCompany);
router.get("/companies/all", getAllCompanies);
router.post("/companies/id", getCompanyById);
router.post("/companies/name", getCompanyByName);
router.patch("/companies/id", updateCompany);
router.delete("/companies/id", deleteCompany);

module.exports = router;
