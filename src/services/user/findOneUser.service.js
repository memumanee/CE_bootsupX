// ไม่สามารถเรียกดู user ได้

const { query } = require("express");
const { userModel } = require("../../models");
const rankingService = require("./rankingUser.service");
//+++++ รอ quetion service
// const getProgressService = require("./getProgressUser.service");

module.exports = async function findOneUser(idData) {
  // console.log("get findOne ser out");
  try {
    const rank = await rankingService(idData);
    // console.log(rank);
    const query = await userModel
      .findById({ _id: idData })
      .select("-_id -password");
    const getUser = {
      name: query.name,
      username: query.username,
      score: query.score,
      group: query.group,
      finished: query.finished,
      rank: rank,

      // +++++ รอ quetion service
      // progress: await getProgressService.getProgress(idData),
    };
    // console.log(getUser);
    return getUser;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
