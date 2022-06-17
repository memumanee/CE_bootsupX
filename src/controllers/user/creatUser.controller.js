const { createUser } = require("../../services/user");

module.exports = async function create(req, res) {
  try {
    const { name, username, password, group } = req.body;
    const query = await createUser({ name, username, password, group });
    // const query = await createUser(req.body);
    console.log(query);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
