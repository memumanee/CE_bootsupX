const { userModel } = require("../../models");

module.exports = async function getScoreboardUser() {
  console.log("get scoreboard out try");
  try {
    return await userModel
      .find()
      .select("-_id -password")
      .sort({ score: "desc" });
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
