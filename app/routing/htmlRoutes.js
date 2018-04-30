/*
   __      _                _ ______ _           _           
  / _|    (_)              | |  ____(_)         | |          
 | |_ _ __ _  ___ _ __   __| | |__   _ _ __   __| | ___ _ __ 
 |  _| '__| |/ _ \ '_ \ / _` |  __| | | '_ \ / _` |/ _ \ '__|
 | | | |  | |  __/ | | | (_| | |    | | | | | (_| |  __/ |   
 |_| |_|  |_|\___|_| |_|\__,_|_|    |_|_| |_|\__,_|\___|_|   
                                                             
*/
var path = require("path");                                             // Allow directory navigation

module.exports = function(app) {                                        // Make this available to other files

    app.get("/survey", function(require, result) {                      // GET request
        result.sendFile(path.join(__dirname, "../public/survey.html")); // Get survey.html
    });
  
    app.get("*", function(require, result) {                            // Default GET request
        result.sendFile(path.join(__dirname, "../public/home.html"));   // Get home.html
    });
};
