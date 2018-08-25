var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var book = new schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    read:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('book',book);