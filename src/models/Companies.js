// models/Company.js

module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define("Companies", {
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

  return Companies;
};
