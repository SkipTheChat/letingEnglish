const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HistorySchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    scores:[
        {
            score:{
            type:String
            },
            answers:{
                type:Array
            },
            handle:{
                type:String
            }
        }
    ]
})

module.exports = FourHistory = mongoose.model("fourhistory",HistorySchema);




