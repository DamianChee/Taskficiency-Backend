require("dotenv").config();

const express = require("express");
const connectDB = require("./src/db/db");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const attendances = require("./src/routers/attendancesRouter");
const attendanceTypes = require("./src/routers/attendanceTypesRouter");
const companies = require("./src/routers/companiesRouter");
const roles = require("./src/routers/rolesRouter");
const teams = require("./src/routers/teamsRouter");
const users = require("./src/routers/usersRouter");
const formats = require("./src/routers/reportFormatsRouter");
const reports = require("./src/routers/reportsRouter");

const limiter = rateLimit({
  windowMs: 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

app.options("*", cors()); // Include this line to allow preflight requests
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5001;
connectDB();

app.use("", attendances);
app.use("", attendanceTypes);
app.use("", companies);
app.use("", roles);
app.use("", teams);
app.use("", users);
app.use("", formats);
app.use("", reports);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**

require("dotenv").config();

const express = require("express");
connectDB = require("./src/db/db");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const dogs = require("./src/routers/dogs");
const tasks = require("./src/routers/tasks");
const users = require("./src/routers/users");

const limiter = rateLimit({
  windowMs: 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", dogs);
app.use("/api", tasks);
app.use("/api", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


 */
