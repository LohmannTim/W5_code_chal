var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/messages.js');
var messages = require('./routes/messages.js');
var mongoose = require('mongoose');

//middleware
app.use(express.static(path.join(__dirname, './public'))); 
app.use(bodyParser.json()); 

//express routes
app.use('/', index); 
app.use('/messages', messages);


//mongoose connection
var databaseUrl = 'mongodb://localhost:27017/messagelist';
mongoose.connect(databaseUrl,
{
    useMongoClient: true 
});
// optional- check to make sure connections are working
mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);    
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});
//start me up a dang server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
    
});