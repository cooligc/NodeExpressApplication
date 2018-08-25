# NodeExpressApplication ![alt text](https://travis-ci.org/cooligc/NodeExpressApplication.svg?branch=master)
---
This is a simple application demonstrate node.js along with express.js for developing RESTful application. This application also has the integration tests along with mock test for the application.

### Java Script Library Used

- ``gulp`` : This is the library for building and running the node application
- ``gulp-nodemon`` : This is the gulp module for nodemon which is used as application reloader on save of application file
- ``gulp-env`` : This will set the environment variable for the application on gulp platform
- ``gulp-mocha`` : This is the gulp module to run the tests with mocha as we know mocha is a testing framework for node
- ``should`` : This is the assertation framework for node
- ``sinon`` : This module allow us to mock the layer
- ``supertest`` : This module is responsible for integration tests
- ``express`` : This module is responsible for REST endpoint exposer
- ``body-parser`` : This module will get used with express to parse the http body
- ``mongoose`` : This is the driver module for mongoDB

### What needs to be preinstalled ? 
- node v10.5.0 or above
- npm v6.1.0 or above
- gulp v3.9.1 or above 
- mongodb v3.6.1 or above

### How to run ? 
- Make sure that mongodb is running on 27017 port
- execute ``gulp`` and this will pull the default task of gulp and will start the application

### How to run tests ? 
- execute ``gulp test`` and this will pull the test task where we have already configure the test job