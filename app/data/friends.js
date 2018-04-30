/*
   __      _                _ ______ _           _           
  / _|    (_)              | |  ____(_)         | |          
 | |_ _ __ _  ___ _ __   __| | |__   _ _ __   __| | ___ _ __ 
 |  _| '__| |/ _ \ '_ \ / _` |  __| | | '_ \ / _` |/ _ \ '__|
 | | | |  | |  __/ | | | (_| | |    | | | | | (_| |  __/ |   
 |_| |_|  |_|\___|_| |_|\__,_|_|    |_|_| |_|\__,_|\___|_|   
                                                             
*/
var friends = [                             // Array to hold values entered in Survery.html
    {
        "name": "Ahmed",
        "photo": "https://picture1.jpg",
        "scores" :[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },{
        "name": "Robert",
        "photo": "https://picture2.jpg",
        "scores" :[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },{
        "name": "Joe",
        "photo": "https://picture3.jpg",
        "scores" :[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }

];

module.exports = friends;                   // Make the 'friends' array available to other files

