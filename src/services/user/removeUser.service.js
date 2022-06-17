const { userModel } = require("../../models");

module.exports = async function removeUser(idData) {
  try {
    const query = idData;
    return await userModel.findByIdAndRemove(query);
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
