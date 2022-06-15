const express = require("express");
const router = express.Router();
// const UserController = require("../controllers/user.controller");
const userController = require("../controllers/user");

router.post("/", userController.create);
router.get("/user", userController.findAll);
router.get("/user/:username", userController.getPassword);
router.get("/user/:_id", userController.findOne);

module.exports = router;
