
var express = require('express');
var app = express();
var yelp = require('./yelp');
var port = 3001;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static(__dirname + '/app'));
app.use(bodyParser());
app.use(methodOverride());


// See http://www.yelp.com/developers/documentation/v2/search_api
//yelp.search({term: "Korean BBQ", location: "84047"}, function(error, data) {
//  if(error) console.log(error);
//  console.log(data);
//});





var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
