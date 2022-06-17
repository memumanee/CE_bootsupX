const { userModel } = require("../../models");

module.exports = async function getFinishUser(idData) {
  try {
    const query = { _id: idData };
    return await userModel.findOne(query).select("finished -_id");
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
