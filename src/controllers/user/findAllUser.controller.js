const { findAllUser } = require("../../services/user");

module.exports = async function findAll(req, res) {
  try {
    console.log("findAll controller");
    const query = await findAllUser();
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
