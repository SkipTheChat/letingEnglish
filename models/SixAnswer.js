const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SixAnswerSchema = new Schema({
    "handle":{
        type:String
    },
    "rightAnswer":{
        type:Array
    }
})



module.exports = SixAnswer = mongoose.model('sixanswer',SixAnswerSchema);
