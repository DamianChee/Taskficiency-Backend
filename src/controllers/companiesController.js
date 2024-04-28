// companiesController.js
const { Companies } = require("../db/Index");

// Seed companies
const seedCompanies = async (req, res) => {
  try {
    const companies = await Companies.bulkCreate([
      { name: "JAG Tech" },
      { name: "McDonalds" },
      { name: "Singtel" },
      { name: "Meta" },
    ]);

    res
      .status(200)
      .json({ status: "ok", msg: "seed completed", data: companies });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in seeding attendance type",
      data: error.message,
    });
  }
};

// Create a new company
const createCompany = async (req, res) => {
  try {
    const newCompany = await Companies.create(req.body);

    res
      .status(200)
      .json({ status: "ok", msg: "company created", data: newCompany });
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

    res
      .status(200)
      .json({ status: "ok", msg: "companies returned", data: companies });
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
    const company = await Companies.findByPk(req.body.id);

    res.status(200).json({ status: "ok", msg: "company found", data: company });
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
        name: req.body.name,
      },
    });

    res.status(200).json({ status: "ok", msg: "company found", data: company });
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
        id: req.body.id,
      },
    });

    res
      .status(200)
      .json({ status: "ok", msg: "company updated", data: company });
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
        id: req.body.id,
      },
    });

    res
      .status(200)
      .json({ status: "ok", msg: "company deleted", data: company });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error in deleting company",
      data: error.message,
    });
  }
};

module.exports = {
  seedCompanies,
  createCompany,
  getAllCompanies,
  getCompanyById,
  getCompanyByName,
  updateCompany,
  deleteCompany,
};
