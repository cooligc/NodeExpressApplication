var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')
    ;

var db ;
if(process.env.ENV == 'Test'){
    db = mongoose.connect('mongodb://localhost:27017/books-test');
}else{
    db = mongoose.connect('mongodb://localhost:27017/books');
}

var book = require('./model/book');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var apiRouter = express.Router();
//book is injected
var bookRouter = require('./routers/bookRoute')(book);

app.use('/api/books',bookRouter);
//app.use('/api/authors',authorRouter);

app.listen(port,function(){
    console.log('Running on port '+ port);
})

module.exports = app;