const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbUri =
  "mongodb+srv://Piyarat:HaXM8NG2Q3sFbqbR@sakchaicuster.iw7lrpz.mongodb.net/testr";
mongoose.connect(dbUri);

// คือการแปลงให้สามารถดึงข้อมูลจาก req.body ได้
app.use(express.json());

app.use("/", require("./routes/user.route"));
app.listen(3001);
