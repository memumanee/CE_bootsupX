const { userModel } = require("../../models");

module.exports = async function findOneUser(idData) {
  console.log("get findOne ser");
  console.log(idData);
  try {
    const query = await userModel
      .findOneById({ idData })
      .select("-_id -password");
    console.log(query);

    const getUser = {
      name: query.name,
      username: query.username,
      score: query.score,
      group: query.group,
      finished: query.finished,
      rank: await this.userRanking(idData),
      progress: await this.getProgress(idData),
    };
    return getUser;
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
