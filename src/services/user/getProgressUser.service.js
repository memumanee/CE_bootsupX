const { userModel } = require("../../models");
const { submitModel } = require("../../models");
const questionService = require("questionService");

// ต้องรอ submitModel questionService
module.exports = async function getProgressUser(idData) {
  console.log("getProgress service");
  try {
    // ----------------------------------|||
    const countQuestion = await questionService.getQty();
    //--------------------------|||
    const countPass = await submitModel
      .findOne({
        userId: userId,
        status: true,
      })
      .count();
    if (countQuestion === 0 && countPass === 0) {
      return Number(0).toFixed(2);
    }
    return ((Number(countPass) * 100) / Number(countQuestion)).toFixed(2);
  } catch (error) {
    loggerError.error(error);
    return null;
  }
};
