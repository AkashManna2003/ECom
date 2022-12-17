const mongoose = require("mongoose");

const PostSchema = {
  username:{
    type:String,
    required:true
  },
  password:{
    type:String
  }
};


const Admins = mongoose.model("OfficialAdmin", PostSchema); //collection name, schema

module.exports = Admins;