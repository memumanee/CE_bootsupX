const { userModel } = require("../../models");

module.exports = async function getScoreUser(idData) {
  console.log("get Score out try");
  try {
    const query = { _id: idData };
    console.log(query);
    return await userModel.findOne(query).select("score -_id");
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
