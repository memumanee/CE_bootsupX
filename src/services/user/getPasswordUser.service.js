const { userModel } = require("../../models");

module.exports = async function getPasswordUser(usernameData) {
  console.log("get pass ser");
  console.log(usernameData);
  try {
    const query = await userModel.findOne({ usernameData }).select("password");
    console.log(query);
    return query;
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
