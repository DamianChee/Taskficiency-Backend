// usersRouter.js
const express = require("express");
const {
  createUser,
  getAllUsers,
  getAllUsersByCompany,
  getUserById,
  getUserByCompany,
  updateUser,
  deleteUser,
  seedUsers,
  register,
  login,
  refresh,
} = require("../controllers/usersController");
const router = express.Router();

router.get("/users/seed", seedUsers);
router.put("/users/create", createUser);
router.get("/users/all", getAllUsers);
router.post("/users/all/company", getAllUsersByCompany);
router.post("/users/id", getUserById);
router.post("/users/company", getUserByCompany);
router.patch("/users/id", updateUser);
router.delete("/users/id", deleteUser);

router.put("users/register", register);
router.post("/users/login", login);
router.post("/users/refresh", refresh);

module.exports = router;
