// models/Company.js

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Company;
};

// const { DataTypes } = require("sequelize");
// const sequelize = require("../db/db");

// const Company = sequelize.define("Company", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Company;
