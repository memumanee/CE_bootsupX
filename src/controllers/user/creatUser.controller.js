const { createUser } = require("../../services/user");

module.exports = async function create(req, res) {
  try {
    const query = await createUser(req.body);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
