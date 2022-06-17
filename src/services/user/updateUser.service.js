const { userModel } = require("../../models");
const bcrypt = require("bcrypt");
const findOne = require("./findOneUser.service");
module.exports = async function updateScore(idData, updateUser) {
  console.log(updateUser);
  try {
    if (findOne(idData._id)) {
      const query = idData._id;
      console.log("query", query);

      // const salt = bcrypt.genSaltSync(12);
      // updateUser.password = bcrypt.hashSync(updateUser.password, salt);

      return await userModel.findOneAndUpdate(
        {
          _id: query,
        },
        {
          password: updateUser,
        }
      );
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
