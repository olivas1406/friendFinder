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
        var answers = (newFriend.scores);           // Var to store the scores
        for(var i=0; i < answers.length; i++) { answers[i] = parseInt(answers[i], 10); } 
                                                    // Convert the scores from Strings to Integers
        newFriend.scores = answers                  // Push the Strings-converted-to Integers back into the Object
  
         // find best match
        var match = {
            name: "",
            photo: "",
            difference: 100
        };

  //var who = "";
 // var whoPic = "";
        var scoreDiff = 0;

  // look at existing people
  for (var i = 0; i < friends.length; i++) {


      // find the difference in scores
        scoreDiff = 0;
      for (var j = 0; j < friends[i].scores; j++) {   
          scoreDiff += Math.abs(answers[j] - friends[i].answers[j]);
      }

      if (scoreDiff <= match.difference) {

          match.name = friends[i].name;
          match.photo = friends[i].photo;
        match.difference = scoreDiff;

      }
    }

    friends.push(newFriend); // always returns newFriend unless this happens last

    console.log("match: " + match.name);


    res.json(match);      // RETURN THIS - NEEDS TO BE THE MATCH    
        
    })
};



/*
app.post('/api/friends', function(req, res){

    // Note the code here. Our "server" will respond to a user"s survey result
      // Then compare those results against every user in the database.
      // It will then calculate the difference between each of the numbers and the user"s numbers.
      // It will then choose the user with the least differences as the "best friend match."
      // In the case of multiple users with the same result it will choose the first match.
      // After the test, it will push the user to the database.
  
      // We will use this object to hold the "best match". We will constantly update it as we
      // loop through all of the options
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };
  
      // Here we take the result of the user"s survey POST and parse it.
      var userData = req.body;
      var userScores = userData.scores;
  
      // This variable will calculate the difference between the user"s scores and the scores of
      // each user in the database
      var totalDifference = 0;
  
      // Here we loop through all the friend possibilities in the database.
      for (var i = 0; i < friends.length; i++) {
  
        console.log(friends[i].name);
        totalDifference = 0;
  
        // We then loop through all the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++) {
  
          // We calculate the difference between the scores and sum them into the totalDifference
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
  
          // If the sum of differences is less then the differences of the current "best match"
          if (totalDifference <= bestMatch.friendDifference) {
  
            // Reset the bestMatch to be the new friend.
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
          }
        }
      }
  
      // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
      // the database will always return that the user is the user's best friend).
      friends.push(userData);
  
      // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
      console.log("best match: " + bestMatch.name);
      res.json(bestMatch);
  
    });
  
  };

*/

