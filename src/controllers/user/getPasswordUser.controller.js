const { getPasswordUser } = require("../../services/user");

module.exports = async function getPassword(req, res) {
  console.log("getPassword out");

  try {
    console.log("get Password");
    console.log(req.params);
    const query = await getPasswordUser(req.params["username"]);
    return res.status(201).send(query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
