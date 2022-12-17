const mongoose = require("mongoose");

const PostSchema = {
  Username:{
    type:String,
    unique:false
    
  },
  username:{
    type:String
  },
  password:{
    type:String
  }
};


const Posts = mongoose.model("OfficialLogin", PostSchema); //collection name, schema

module.exports = Posts;