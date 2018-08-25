var express = require('express');

var routes = function(book){
    bookRouter = express.Router();

    var bookController = require('../controller/bookController')(book);

    bookRouter.route('/')
            .post(bookController.post)
            .get(bookController.get);
            //Middleware --> Kind of Filter in JEE
            bookRouter.use('/:bookId',function(req,res,next){
                console.log('Got the data for '+req.params.bookId);
                book.findById(req.params.bookId,function(err,book){
                    if(err){
                        console.log(err);
                        res.status(500).send(err);
                    }else if(book){
                        console.log('Book '+JSON.stringify(book));
                        req.book=book;
                        //This statement will make the next call
                        next();
                    }else{
                        res.status(404).send('No Book found');
                    }
                });
            });
    
    bookRouter.route('/:bookId')
            .get(function(req,res){
                //Refactored
                /*book.findById(req.params.bookId,function(err,book){
                    if(err){
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        res.json(book)
                    }
                });*/
                res.json(req.book);
            })
            .put(function(req,res){
                //Refactored
                /*book.findById(req.params.bookId,function(err,book){
                    if(err){
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        book.title = req.body.title;
                        book.author = req.body.author;
                        book.genre = req.body.genre;
                        book.read = req.body.read;
                        book.save(function(err){
                             console.log(err);
                        });
                        res.json(book)
                    }*/
                req.book.title = req.body.title;
                req.book.author = req.body.author;
                req.book.genre = req.body.genre;
                req.book.read = req.body.read;
                console.log('Going to update the data '+ JSON.stringify(req.body));
                req.book.save(function(err){
                    console.log(err);
                });
                res.json(req.book)
            });
        return bookRouter;
};

module.exports = routes;