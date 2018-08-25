var should = require('should'),
    sinon = require('sinon');
//sinon framework for mock

describe('Tests for Book Controller',function(){
    describe('Post',function(){
        it('should not allow an empty title on post',function(){
            //Control on BookController now
            //The below statement will mock save method
            var book = function(book1){this.save= function(){}};

            //Mock request
            var req = {
                body : {
                    author: 'Test'
                }
            }

            //Mock response
            var res = {
                status: sinon.spy(),
                send : sinon.spy()
            }

            var bookController = require('../controller/bookController')(book);
            bookController.post(req,res);

            //The below statement will feed the value for spy
            res.status.calledWith(400).should.equal(true,'Bad Status '+res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);


        })
    })
});