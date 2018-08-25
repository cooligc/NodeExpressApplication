var should = require('should')
    request = require('supertest'),
    app = require('../app.js')
    mongoose = require('mongoose'),
    Book = mongoose.model('book'),
    agent = request.agent(app);


describe('Book Crud Test',function(){
    it('Should allow a book to be posted and return a read and _id',function(done){
        var bookPost = {title:'Test Book',author:'test', genre : 'Test'};
        agent.post('/api/books')
             .send(bookPost)
             .expect(201)
             .end(function(err,results){
                 results.body.read.should.equal(false);
                 results.body.should.have.property('_id');
                 done();
             })
    });

    afterEach(function(done){
        Book.remove().exec();
        done();
    })
}); 