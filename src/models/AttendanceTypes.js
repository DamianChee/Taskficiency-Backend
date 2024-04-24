// models/AttendanceType.js

module.exports = (sequelize, DataTypes) => {
  const AttendanceTypes = sequelize.define("AttendanceTypes", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return AttendanceTypes;
};
