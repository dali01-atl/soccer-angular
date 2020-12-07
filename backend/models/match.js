const mongoose=require('mongoose');

//le schema du model (define model attributes)
const matchSchema=mongoose.Schema({
    teamOne:String,
    //string avec S majiscule parce que on travaille dans le js 
    scoreOne:String,
    teamTwo:String,
    scoreTwo:String,
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const match= mongoose.model('Match',matchSchema)
module.exports=match;
