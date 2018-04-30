
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
      //  console.log(newFriend);             // REMOVE ME REMOVE ME REMOVE ME
       

        var answers = (newFriend.scores);

        for(var i=0; i < answers.length; i++) { answers[i] = parseInt(answers[i], 10); } 

        console.log(answers);
        
  
    });
        


        friends.push(newFriend);            


        res.json(newFriend);              
        
    
};
