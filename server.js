// Dependencies
// -----------------------------------------------------
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride  = require('method-override');
var app = express();


// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
mongoose.connect('mongodb://localhost:27017/mean', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Logging and Parsing
app.use(express.static(path.join(__dirname, 'public')));        // sets the static files location to public
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: false}));              // parse application/x-www-form-urlencoded
app.use(methodOverride());

// Routes
// ------------------------------------------------------
require('./app/routes.js')(express,app);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Listen
// -------------------------------------------------------
app.listen(3000, function() {  
    console.log('App listening on port 3000');
});