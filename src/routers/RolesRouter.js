// rolesRouter.js
const express = require("express");
const {
  seedRoles,
  createRole,
  getAllRoles,
  getRoleById,
  getRoleByName,
  updateRole,
  deleteRole,
} = require("../controllers/RolesController");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.get("/roles/seed", seedRoles);
router.put("/roles/create", authMiddleware, createRole);
router.get("/roles/all", getAllRoles);
router.post("/roles/id", getRoleById);
router.post("/roles/name", getRoleByName);
router.patch("/roles/id", authMiddleware, updateRole);
router.delete("/roles/id", authMiddleware, deleteRole);

module.exports = router;
