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

// Constraint tables
const AttendanceType = require("../models/AttendanceTypes")(
  sequelize,
  Sequelize.DataTypes
);
const Role = require("../models/Roles")(sequelize, Sequelize.DataTypes);

// Following Table hierarchy Company -> User -> Team & Attendance
const Company = require("../models/Companies")(sequelize, Sequelize.DataTypes);
const User = require("../models/Users")(sequelize, Sequelize.DataTypes);
const Team = require("../models/Teams")(sequelize, Sequelize.DataTypes);
const Attendance = require("../models/Attendances")(
  sequelize,
  Sequelize.DataTypes
);

module.exports = {
  sequelize,
  Attendance,
  AttendanceType,
  Company,
  Role,
  Team,
  User,
};
