const { userModel } = require("../../models");

module.exports = async function updateFinishedUser(idData) {
  // console.log("update finish out try");
  try {
    const query = await userModel.findById(idData);
    // console.log(query);
    return userModel.findByIdAndUpdate(idData, {
      finished: query.finished + 1,
    });
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
