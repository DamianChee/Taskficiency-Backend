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
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    OT_clock_in: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    OT_clock_out: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    clock_in: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: () => {
        const now = new Date();
        // Format the time part of the Date object as a string in the format 'HH:MM:SS'
        return `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      },
    },
    clock_out: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users", // This is a reference to another model
        key: "id",
      },
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Companies", // This is a reference to another model
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
