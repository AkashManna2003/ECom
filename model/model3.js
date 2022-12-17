const mongoose = require("mongoose");

const PostSchema = {
  username:{
    type:String,
    required: true    
  },
  id:{
    type:String
  },
  img:{
    type:String
  },
  title:{
    type:String
  },
  price:{
    type:String
  }
};


const Carts = mongoose.model("OfficialCart", PostSchema); //collection name, schema

module.exports = Carts;