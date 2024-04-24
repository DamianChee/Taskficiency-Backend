// models/Teams.js

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define("Teams", {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
  });

  return Teams;
};
