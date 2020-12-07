const mongoose=require('mongoose');

//le schema du model (define model attributes)
const stadiumSchema=mongoose.Schema({
    name:String,
    //string avec S majiscule parce que on travaille dans le js 
    country:String,
    capacity:String
    // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const stadium= mongoose.model('Stadium',stadiumSchema)
module.exports=stadium;
