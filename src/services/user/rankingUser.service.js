const { userModel } = require("../../models");
// const getUserService = require("./findOneUser.service");

module.exports = async function rankingUser(idData) {
  // console.log("get ranking ser out");
  console.log(idData._id);

  try {
    // console.log("get ranking ser in");
    const query = await userModel
      .find({})
      .select("score _id group")
      .sort({ score: "desc" });
    // console.log(query);

    compareScore = (a, b) => {
      if (a.score === b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    };

    //ไม่รู้ว่า user เรียกมาจากตรงไหน
    // console.log(query);
    const allUser = query.filter((user) => user.group < 5);
    // console.log(allUser);
    const sortAllUser = allUser.sort(compareScore);
    // console.log(String(sortAllUser[0]._id) === String(idData._id), idData);
    const rank = sortAllUser.findIndex(
      (user) => String(user._id) === String(idData._id) //compare mongoId ต้องทำเป็น String ก่อน
    );
    console.log(rank);
    return rank + 1;
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
