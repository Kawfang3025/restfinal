var express = require('express');
var cors = require('cors')
var app = express();
var db = require('./database')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
// index page
app.get('/', function (req, res) {
    res.send('SERVER RUNNING!!!');
    });
// CRUD PRODUCT
app.get('/api/customer', db.getAllCustomers);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});