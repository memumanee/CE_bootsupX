// เรียกcreate มาเป็น object
const create = require("./creatUser.controller");
const findAll = require("./findAllUser.controller");
const getPassword = require("./getPasswordUser.controller");
const findOne = require("./findOneUser.controller");
// เรียกมาเป็น function
module.exports = {
  create,
  findAll,
  getPassword,
  findOne,
};
