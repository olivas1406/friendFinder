/*
   __      _                _ ______ _           _           
  / _|    (_)              | |  ____(_)         | |          
 | |_ _ __ _  ___ _ __   __| | |__   _ _ __   __| | ___ _ __ 
 |  _| '__| |/ _ \ '_ \ / _` |  __| | | '_ \ / _` |/ _ \ '__|
 | | | |  | |  __/ | | | (_| | |    | | | | | (_| |  __/ |   
 |_| |_|  |_|\___|_| |_|\__,_|_|    |_|_| |_|\__,_|\___|_|   
                                                             
*/
var express = require("express");                                   // Require Express to create APIs
var bodyParser = require("body-parser");                            // Require body-parser for JSON
var path = require("path");                                         // Allow directory navigation
var app = express();                                                // Call express using 'app'
var PORT = process.env.PORT || 3000;                                // Set the port to 3000 or allow Heroku to decide

app.use(bodyParser.json());                                         // Use JSON
app.use(bodyParser.urlencoded({ extended: true }));                 // Allow nested objects


app.use(bodyParser.text());            // IS THIS NEEDED? USE TEXT                             // 


app.use(bodyParser.json({ type: "application/vnd.api+json" }));     // Media type to parse

require(path.join(__dirname, './app/routing/apiRoutes'))(app);      // Access API routes
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);     // Access HTML routes

app.listen(PORT, function() {                                       // Start app
    console.log("App listening on PORT " + PORT);
});
  