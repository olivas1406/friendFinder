
  
app.get("/survey", function(require, result) {
    result.sendFile(path.join(__dirname, "survey.html"));
});
  
app.get("*", function(require, result) {
    result.sendFile(path.join(__dirname, "home.html"));
});

