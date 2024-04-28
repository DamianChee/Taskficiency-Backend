// teamsRouter.js
const express = require("express");
const {
  createTeam,
  getAllTeams,
  getTeamById,
  getTeamByName,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamsController");
const router = express.Router();

router.put("/teams/create", createTeam);
router.get("/teams/all", getAllTeams);
router.post("/teams/id", getTeamById);
router.post("/teams/name", getTeamByName);
router.patch("/teams/id", updateTeam);
router.delete("/teams/id", deleteTeam);

module.exports = router;
