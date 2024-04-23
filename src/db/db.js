const { Client } = require("pg");

const Sequelize = require("sequelize");
const config = require("../../config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const connectDB = async (app, PORT) => {
  try {
    const sequelize = new Sequelize(
      dbConfig.database,
      dbConfig.username,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      }
    );

    await sequelize.authenticate();
    console.log(
      `${dbConfig.database} connected at ${dbConfig.host} Port: ${dbConfig.port}`
    );

    await sequelize.sync({ force: false }); // Use force: true with caution in production
    console.log("Database & tables created!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

/**
Self-notes:

Explanation of pool within sequelize:

max: This option sets the maximum number of connections that the pool will maintain. In this case, it's set to 5. This means that Sequelize will keep up to 5 connections open to the database at any given time. Adjusting this value is important to balance between performance and resource usage. If your application requires more connections, you might need to increase this number, but be mindful of your database server's maximum allowed connections 2.

min: This specifies the minimum number of connections that the pool should maintain. Setting it to 0 means that there will be no idle connections in the pool when the application is idle. This can be useful for saving resources when the application is not actively using the database 2.

acquire: This is the maximum time, in milliseconds, that a connection can be acquired before throwing an error. If all connections are in use and the pool cannot provide a connection within this time frame, an error will be thrown. Setting this to 30000 (30 seconds) means that if a connection cannot be acquired within 30 seconds, an error will occur 2.

idle: This option defines the maximum time, in milliseconds, that a connection can be idle before being released back to the pool. In this configuration, it's set to 10000 (10 seconds). This means that if a connection is not used for 10 seconds, it will be considered idle and may be released back to the pool. However, it's important to note that being "idle" does not automatically mean the connection will be removed from the pool. The actual removal of idle connections is managed by the evict setting, which is not explicitly mentioned in the provided configuration but is crucial for understanding how idle connections are handled

Explanation of the log appearing in terminal:
"Executing (default): SELECT 1+1 AS result"

"is a part of Sequelize's internal logging mechanism. This message is not an error but rather a confirmation that Sequelize is able to execute SQL queries against your database."

 */
