// models/Attendance.js

module.exports = (sequelize, DataTypes) => {
  const Attendances = sequelize.define("Attendances", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    OT_hours: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    clock_in: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    clock_out: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users", // This is a reference to another model
        key: "id",
      },
    },
    attendance_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "AttendanceTypes", // This is a reference to another model
        key: "id",
      },
    },
  });

  return Attendances;
};
