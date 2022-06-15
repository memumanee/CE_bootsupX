const { findOneUser } = require("../../services/user");

module.exports = async function findOne(req, res) {
  try {
    const query = await findOneUser(req.params["_id"]);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
