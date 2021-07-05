const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    gender : String,
    married: String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    college : {
        type: String,
        required: true,
        unique: true
    },
    degree : {
        type: String,
        required: true,
        unique: true
    },
    year : {
        type: String,
        required: true,
        unique: true
    }
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;