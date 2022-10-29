import mongoose, { now } from 'mongoose';


const NoteSchema = new Schema({
Title:{
    type:String,
    require:true
   
},
Description:{
  type: String,
  
},
tag:{
    type: String,
    default:'General' 
},
Date:{
    type:Date,
    default:now
}
});


module.exports= mongoose.model('Note',NoteSchema);