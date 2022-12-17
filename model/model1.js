const mongoose = require("mongoose");

const notesSchema = {
  title: {
    type:String
  },
  content: {
    type:String
  },
    url:{
    type:String
  },
  price:{
    type:String
  },
  cont:{
        type:String
  },
  id:{
    type:String
  }
};

const Note = mongoose.model("OfficialContent", notesSchema);

module.exports = Note;