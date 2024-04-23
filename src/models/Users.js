// models/User.js

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
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
    contact_home: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contact_mobile: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Companies", // This is a reference to another model
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Roles", // This is a reference to another model
        key: "id",
      },
    },
  });

  return Users;
};
