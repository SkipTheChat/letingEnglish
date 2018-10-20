const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TedSchema = new Schema({
    handle:{
        type:String
    },
    title:{
        type:String
    },
    urlsrc:{
        type:String
    },
   article:{
        type:String
   }
})



module.exports = Ted = mongoose.model('ted',TedSchema);
