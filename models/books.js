const { string } = require('joi');
const { MongoServerClosedError } = require('mongodb');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
    
    },
    condition:{
        type:String
    },
    author:{
        type:String
    }
    
    

});
module.exports = mongoose.model('books',bookSchema);