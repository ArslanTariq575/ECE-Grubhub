const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
  email : String,
  password : String
});
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User",userSchema);
module.exports = User;
