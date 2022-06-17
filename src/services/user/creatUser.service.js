const { userModel } = require("../../models");

module.exports = async function createUser(body) {
  console.log("create");
  try {
    // const newUser = {
    //   name: body.name,
    //   username: body.username,
    //   password: body.password,
    //   group: body.group,
    // };
    const query = new userModel(body);
    // const query = new userModel(newUser);
    console.log(query);
    return query.save();
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
