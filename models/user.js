const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const users = mongoose.model("Users", usersSchema);

module.exports = users;
