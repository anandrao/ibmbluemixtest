var main = require("./lib/main");
var _ = require("underscore");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 8080;
var options;
var shortOptions;
var envOptions = {};
app.use(express.static(__dirname + '/views'));
require("cf-deployment-tracker-client").track();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();


app.post('/postUserFormData',jsonParser, function (request,response){
    console.log(request);
    response.send({
        foo:request.body
    });
});

// Guide Part 1 - loading the To-Do without Cloudant.
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});





// Guide Part 2 - Using Cloudant
/*
 if (process.env.PORT != null) {
        envOptions.port = process.env.PORT;
    }
    options = _.defaults(envOptions, {
        db: 'cloudant'
    });
    return main.start(options);
 */
