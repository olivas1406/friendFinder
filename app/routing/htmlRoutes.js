
var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(require, result) {
        result.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });
  
    app.get("*", function(require, result) {
        result.sendFile(path.join(__dirname, "./app/public/home.html"));
    });
};
