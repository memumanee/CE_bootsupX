const { userModel } = require("../../models");

module.exports = async function getRankingUser() {
  console.log("get ranking out try");
  try {
    return await userModel
      .find()
      .select("-_id -password")
      .sort({ score: "desc" })
      .limit(3);
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
