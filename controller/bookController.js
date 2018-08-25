var bookController = function(book){
    var post = function(req,res){
                var book2 = new book(req.body);

                if(!req.body.title){
                    res.status(400);
                    res.send('Title is required')
                }else{
                    book2.save(function(err){
                    console.log(err);
                    });
                    console.log(book2);
                    res.status(201);
                    res.send(book2);
                }
            }
    
    var get = function(req,res){
                var query = {};
                if(req.query.genre){
                    query.genre = req.query.genre;
                }
                book.find(query,function(err,books){
                    if(err){
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        //HATEOS
                        var returnBooks = [];
                        books.forEach(function(element, index, array){
                            var newBook = element.toJSON();
                            newBook.links = {};
                            newBook.links.self='http://'+req.headers.host+'/api/books/'+newBook._id;
                            returnBooks.push(newBook);
                        })
                        res.json(returnBooks)
                    }
                });
            }

    return {
        post : post,
        get : get
    }
}

module.exports = bookController;