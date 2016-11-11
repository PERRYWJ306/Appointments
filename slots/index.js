var express = require('express');
var assert = require('assert');

var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

var routes = require('./slot_routes.js')(app);

var url = 'mongodb://localhost/slots'

mongoose.connect(url);

var server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001/');
});