/*
   __      _                _ ______ _           _           
  / _|    (_)              | |  ____(_)         | |          
 | |_ _ __ _  ___ _ __   __| | |__   _ _ __   __| | ___ _ __ 
 |  _| '__| |/ _ \ '_ \ / _` |  __| | | '_ \ / _` |/ _ \ '__|
 | | | |  | |  __/ | | | (_| | |    | | | | | (_| |  __/ |   
 |_| |_|  |_|\___|_| |_|\__,_|_|    |_|_| |_|\__,_|\___|_|   
                                                             
*/
var friends = require("../data/friends.js");                                // Require the file that has the 'friends' array

module.exports = function(app) {                                            // Make this available to other files

    app.get("/api/friends", function(req, res) {                            // GET request
        return res.json(friends);                                           // pull what it is in the 'friends' array
    });

    app.post('/api/friends', function(req, res){                            // POST request

        var newFriend = req.body;                                           // pull from the HTML
        var answers = newFriend.scores;                                     // Var to store the scores

        for(var i=0; i < answers.length; i++) {                             // Convert the scores from Strings to Integers 
            answers[i] = parseInt(answers[i], 10); }

        newFriend.scores = answers                                          // Push the Strings-converted-to-Integers back into the Object

        var match = {                                                       // Object to hold friend match
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var scoreDiff = 0;                                                  // Var to hold the difference between scores

        for (var i = 0; i < friends.length; i++) {                          // Loop through friends array

        scoreDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {                // Loop through scores
                scoreDiff += Math.abs(answers[j] - friends[i].scores[j]);   // Find the difference between the scores and store them in var scoreDiff

                if (scoreDiff <= match.friendDifference) {                  // If the difference is less then what's in var 'match' 
                    match.name = friends[i].name;                           // Set the new match name
                    match.photo = friends[i].photo;                         // Set the new match photo
                    match.friendDifference = scoreDiff;                     // Set the new friendDifference
                }
            }
        }
        friends.push(newFriend);                                            // Add the new person to the 'friends' array
        console.log("best match: " + match.name);       // REMOVE ME REMOVE ME REMOVE ME REMOVE ME REMOVE ME
        res.json(match);                                                    // Send the response as JSON

    });

};

