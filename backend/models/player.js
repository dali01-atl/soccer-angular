const mongoose=require('mongoose');

//le schema du model (define model attributes)
const playerSchema=mongoose.Schema({
    date:String,
    //string avec S majiscule parce que on travaille dans le js 
    grandTitre:String,
    commentaire:String, 
    image:String   // attribute for image 
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const player= mongoose.model('Player',playerSchema)
module.exports=player;
