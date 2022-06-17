const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//------------------------------------------------------------
//                          TEST
const userService = require("../services/user");
//------------------------------------------------------------
router.post("/", userController.create);
router.get("/user", userController.findAll);
router.get("/user/profile/:username", userController.getPassword);
router.get("/user/:_id", userController.findOne);
//------------------------------------------------------------
//                          TEST

//+++++getFinishUser PASS
router.get("/getFinish/:_id", async (req, res) => {
  try {
    const query = await userService.getFinishUser(req.params);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//+++++getRankingUser PASS
router.get("/getRanking", async (req, res) => {
  try {
    const query = await userService.getRankingUser();
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//+++++getScoreboardUser PASS
router.get("/getScoreboard", async (req, res) => {
  try {
    const query = await userService.getScoreboardUser();
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//+++++getScoreUser PASS
router.get("/getScore/:_id", async (req, res) => {
  try {
    const query = await userService.getScoreUser(req.params);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//+++++rankigUser PASS
router.get("/rankingUser/:_id", async (req, res) => {
  try {
    const query = await userService.rankingUser(req.params);
    console.log(typeof query);
    return res.status(201).send(String(query));
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

// remove
//+++++removeUser PASS
router.delete("/user/:_id", async (req, res) => {
  try {
    const query = await userService.removeUser(req.params);
    console.log(req.params);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//+++++updateScoreUser waiting TESTING
router.post("/updateScore/:_id", async (req, res) => {
  try {
    console.log("route update score");
    const query = await userService.updateScoreUser(req.params, req.body.score);
    console.log("rq.params" + req.params);
    console.log("rq body.score" + req.body.score);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//updateFinishUser PASS
router.patch("/updateFinished/:_id", async (req, res) => {
  try {
    const query = await userService.updateFinishedUser(req.params);
    return res.status(201).send(String(query));
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

//updateFScoreUser
router.patch("/updateScoreUser/:_id", async (req, res) => {
  try {
    const query = await userService.updateScoreUser(req.params, req.body.score);
    return res.status(201).send(String(query));
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

//updateUser
router.patch("/updateUser/:_id", async (req, res) => {
  try {
    const query = await userService.updateUser(req.params, req.body.password);
    return res.status(201).send(String(query));
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

module.exports = router;
