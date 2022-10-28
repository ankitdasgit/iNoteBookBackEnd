const mongoose = require('mongoose');

const connectToMongo = ()=>{
mongoose.connect("mongodb+srv://ankitdas:123@owndatabase.ho84hwh.mongodb.net/test", () =>{
  console.log("connecting to database");
  
});

};

module.exports=connectToMongo;