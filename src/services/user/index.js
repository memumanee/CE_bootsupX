const createUser = require("./creatUser.service");
const findAllUser = require("./findAllUser.service");
const getPasswordUser = require("./getPasswordUser.service");
const findOneUser = require("./findOneUser.service");
const rankingUser = require("./rankingUser.service");
// const getProgressUser = require("./getProgressUser.service");
const getScoreUser = require("./getScoreUser.service");
const getFinishUser = require("./getFinishUser.service");
const updateScoreUser = require("./updateScoreUser.service");
const updateFinishedUser = require("./updateFinishedUser.service");
const updateUser = require("./updateUser.service");
const removeUser = require("./removeUser.service");
const getRankingUser = require("./getRankingUser.service");
const getScoreboardUser = require("./getScoreboardUser.service");
module.exports = {
  createUser,
  findAllUser,
  getPasswordUser,
  findOneUser,
  rankingUser,
  // getProgressUser,
  getScoreUser,
  getFinishUser,
  updateScoreUser,
  updateFinishedUser,
  updateUser,
  removeUser,
  getRankingUser,
  getScoreboardUser,
};
