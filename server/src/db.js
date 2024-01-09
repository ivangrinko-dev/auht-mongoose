const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/auth");

const TableUser = mongoose.model("users", {
  name: String,
  surname: String,
  age: String,
  email: String,
  pwd: String,
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { TableUser, ObjectId };