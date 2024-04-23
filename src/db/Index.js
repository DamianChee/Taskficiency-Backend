// models/index.js
const Sequelize = require("sequelize");
const config = require("../../config.json");

const env = process.env.DB_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

const Company = require("../models/Company")(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Company,
};
