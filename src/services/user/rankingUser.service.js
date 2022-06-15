const { userModel } = require("../../models");
const getUserService = require("./findOneUser.service");

module.exports = async function findOneUser(idData) {
  console.log("get findOne ser");
  console.log(idData);
  try {
    const query = await userModel
      .find()
      .select(["score", "_id", "group"])
      .sort({ score: "desc" });
    console.log(query);
    const getUserService = await user;
    const allUser = query.filter((user.getUser) => query.group < 5);

    return getUser;
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
