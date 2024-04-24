const express = require("express");
const {
  createRole,
  getAllRoles,
  getRoleById,
  getRoleByName,
  updateRole,
  deleteRole,
} = require("../controllers/rolesController");
const router = express.Router();

router.put("/roles/create", createRole);
router.get("/roles/all", getAllRoles);
router.post("/roles/id", getRoleById);
router.post("/roles/name", getRoleByName);
router.patch("/roles/id", updateRole);
router.delete("/roles/id", deleteRole);

module.exports = router;
