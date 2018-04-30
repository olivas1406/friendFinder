/*
   __      _                _ ______ _           _           
  / _|    (_)              | |  ____(_)         | |          
 | |_ _ __ _  ___ _ __   __| | |__   _ _ __   __| | ___ _ __ 
 |  _| '__| |/ _ \ '_ \ / _` |  __| | | '_ \ / _` |/ _ \ '__|
 | | | |  | |  __/ | | | (_| | |    | | | | | (_| |  __/ |   
 |_| |_|  |_|\___|_| |_|\__,_|_|    |_|_| |_|\__,_|\___|_|   
                                                             
*/
var friends = require("../data/friends.js");        // Require the file that has the 'friends' array

module.exports = function(app) {                    // Make this available to other files

    app.get("/api/friends", function(req, res) {    // GET request
        return res.json(friends);                   // pull what it is in the 'friends' array
    });
  
    app.post("/api/friends", function(req, res) {   // POST request
        var newFriend = req.body;                   // pull from the HTML
      //  console.log(newFriend);                           // REMOVE ME REMOVE ME REMOVE ME
       
        var answers = (newFriend.scores);           // Var to store the scores
        for(var i=0; i < answers.length; i++) { answers[i] = parseInt(answers[i], 10); } 
                                                    // Convert the scores from Strings to Integers

     //   console.log(answers);                              // REMOVE ME REMOVE ME 
        newFriend.scores = answers                  // Push the Strings-converted-to Integers back into the Object
        console.log(newFriend);                             // REMOVE ME REMOVE ME
  
        friends.push(newFriend);                    // Push the results to the 'friends' array




         // find best match
  var who = "";
  var whoPic = "";
  var scoreDiff = 0;

  // look at existing people
  for (var i = 0; i < friends.length; i++) {
      // find the difference in scores
      var difference = 0;
      for (var j = 0; j < answers.length; j++) {
          difference += Math.abs(friends[i].scores[j] - answers[j]);
      }
      console.log("difference: " + difference);
      // lowest diff = match
      if (difference < scoreDiff) {
          scoreDiff = difference;
          who = friends[i].name;
          whoPic = friends[i].photo

          console.log(who);
          console.log(whoPic);
      }
    }






        res.json(newFriend);      // RETURN THIS - NEEDS TO BE THE MATCH    
        
    })
};
