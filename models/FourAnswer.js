const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    handle:{
        type:String
    },
    rightAnswer:{
        type:Array
    }
})



module.exports = FourAnswer = mongoose.model('fouranswer',AnswerSchema);
