const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true, trim: true },
  password: { type: String, required: true },
  avatar: { type: String }, 
});
