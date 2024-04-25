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
const router = express.Router();

router.get("/roles/seed", seedRoles);
router.put("/roles/create", createRole);
router.get("/roles/all", getAllRoles);
router.post("/roles/id", getRoleById);
router.post("/roles/name", getRoleByName);
router.patch("/roles/id", updateRole);
router.delete("/roles/id", deleteRole);

module.exports = router;
