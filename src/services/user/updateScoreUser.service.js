const { userModel } = require("../../models");
const getFinishService = require("./getFinishUser.service");

module.exports = async function updateScoreUser(idData, scoreData) {
  // console.log("updateScore out try");
  try {
    if (userModel.findOne(idData)) {
      const queryFinish = await getFinishService(idData);
      const finished = queryFinish.finished + 1;
      return await userModel.updateMany(idData, {
        score: scoreData,
        finished: finished,
      });
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
