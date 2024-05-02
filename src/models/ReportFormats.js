// models/Attendance.js

// format will contain the columns names and any filled in rows

// reports will contain two columns
// column 1 will contain copies of the format to be edited
// column 2 will contain a historical copy,
// if column 2 is empty when creating column 1, do nothing
// if column 1 is updated, copy into column 2 first before updating

/**
 * {
 *   "columns": [
 *     { "id": 1, "column_name": "id" },
 *     { "id": 2, "column_name": "task" },
 *     { "id": 3,"column_name": "manhours" },
 *     { "id": 4,"column_name": "completed" },
 *     { "id": 5,"column_name": "comments" }
 *   ],
 *   "rows": [
 *     { "id": 1,"task": "do A","manhours": 1,"completed": false, "comments": "" },
 *     { "id": 2,"task": "do B","manhours": 2,"completed": false, "comments": "" },
 *     { "id": 3,"task": "do C","manhours": 0.5,"completed": false, "comments": "" },
 *     { "id": 4,"task": "do D","manhours": 1.5,"completed": false, "comments": "" },
 *     { "id": 5,"task": "do E","manhours": 1,"completed": false, "comments": "" }
 *   ]
 * }
 *
 * reports = [
 *   {
 *     {id: 1, task: do A, manhours: 1.0, completed: true, comments: ""},
 *     {id: 2, task: do B, manhours: 2.0, completed: true, comments: ""},
 *     {id: 3, task: do C, manhours: 0.5, completed: true, comments: ""},
 *     {id: 4, task: do D, manhours: 1.5, completed: true, comments: ""},
 *     {id: 5, task: do E, manhours: 1.0, completed: true, comments: ""},
 *   },
 *   {
 *     {id: 1, task: do A, manhours: 1.0, completed: true, comments: ""},
 *     {id: 2, task: do B, manhours: 2.0, completed: true, comments: ""},
 *     {id: 3, task: do C, manhours: 0.5, completed: true, comments: ""},
 *     {id: 4, task: do D, manhours: 1.5, completed: false, comments: "Missing D item"},
 *     {id: 5, task: do E, manhours: 1.0, completed: true, comments: ""},
 *   },
 *   {
 *     {id: 1, task: do A, manhours: 1.0, completed: false, comments: ""},
 *     {id: 2, task: do B, manhours: 2.0, completed: true, comments: "Replace B item"},
 *     {id: 3, task: do C, manhours: 0.5, completed: true, comments: ""},
 *     {id: 4, task: do D, manhours: 1.5, completed: false, comments: ""},
 *     {id: 5, task: do E, manhours: 1.0, completed: false, comments: "Crane unavailable"},
 *   }
 * ]
 */

module.exports = (sequelize, DataTypes) => {
  const ReportFormats = sequelize.define("ReportFormats", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: () => `New Format`,
    },
    format: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Companies", // This is a reference to another model
        key: "id",
      },
      defaultValue: 1,
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users", // This is a reference to another model
        key: "id",
      },
      defaultValue: 1,
    },
  });

  return ReportFormats;
};
