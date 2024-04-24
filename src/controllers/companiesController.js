// controllers/companyController.js
const Companies = require("../models/Companies");

// Create a new company
const createCompany = async (req, res) => {
  try {
    const newCompany = await Companies.create(req.body);
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "company created", data: newCompany });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in creating company",
      data: error.message,
    });
  }
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Companies.findAll({});
    if (res.ok) {
      res
        .status(200)
        .json({ status: "ok", msg: "companies returned", data: companies });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting companies",
      data: error.message,
    });
  }
};

// Get company by id (primary key)
const getCompanyById = async (req, res) => {
  try {
    const company = await Companies.findByPk(req.params.id);
    if (res.ok && company) {
      res
        .status(200)
        .json({ status: "ok", msg: "company found", data: company });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "company not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting company",
      data: error.message,
    });
  }
};

// Get company by name
const getCompanyByName = async (req, res) => {
  try {
    const company = await Companies.findOne({
      where: {
        name: req.params.name,
      },
    });
    if (res.ok && company) {
      res
        .status(200)
        .json({ status: "ok", msg: "company found", data: company });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "company not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in getting company",
      data: error.message,
    });
  }
};

// Update company by id
const updateCompany = async (req, res) => {
  try {
    const company = await Companies.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (res.ok && company) {
      res
        .status(200)
        .json({ status: "ok", msg: "company updated", data: company });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in updating company",
      data: error.message,
    });
  }
};

// Delete company by id
const deleteCompany = async (req, res) => {
  try {
    const company = await Companies.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (res.ok && company) {
      res
        .status(200)
        .json({ status: "ok", msg: "company deleted", data: company });
    } else if (res.ok) {
      res.status(404).json({ status: "ok", msg: "company not found" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting company",
      data: error.message,
    });
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  getCompanyByName,
  updateCompany,
  deleteCompany,
};
