const { userModel } = require("../../models");

module.exports = async function findAllUser() {
  try {
    const query = await userModel.find().select("-_id -password");
    return query;
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
