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
        "name": "Robert",
        "photo": "https://lh3.googleusercontent.com/QY7vT0XxhpzgvpTCwq1NdQAQ8EfrLCCMcyX5QzG87hL_WbRLY7rdZ_zvy7rWzyGwwgmoKDvNXZQnraBUZWltwSdCpwse8VSC8D2sKnlty5EJSutrVTGinMUfGWXkOM1Q295HWF_Uif1oeewPFyI-knr5hxINoart4LdYGeVkn4Lm18sMn_CneRVmU5kZ0vSwJkoUsKps0NVjvjY85Qh5ZWg-k_2xxCDQxCR63TJTa9eyGFerelpw2DE4dLbL1l_d-vGLo1t-6CcMXve4hnfzlc5SZ-VZPosE1GsE1ZurtTDWhp38MBBTVVr13D0HA9vG8xRqoMWDTeIvtZn7_QlUFsJDmVKmz9eRbSHw0rsFJWsh8tsppfGgcYqDU0nuineEvpXOy59dpPi4wv7hWWTJdn_jtJpJmyMaZRqaDBA16JcVZ7qRT3B3Wdt7NE0Q9_6FVrSYNzHw2Y-Cw1kyY-d4XFu2tuDi4IqMmm0Q5Z22GMgKr9Q5ScB3ETPNemck3TzfdzXezJvMVRv1IgJ_YdQrGDp2bG59E65ns3FbaJnbM59DtFCqgMsqEYAMw6ik85Np5K0oylIV0GuLHGJLa8bv7qirEjeiPq_tAXlEquw=w312-h462-no",
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
        "name": "Ahmed",
        "photo": "https://lh3.googleusercontent.com/QY7vT0XxhpzgvpTCwq1NdQAQ8EfrLCCMcyX5QzG87hL_WbRLY7rdZ_zvy7rWzyGwwgmoKDvNXZQnraBUZWltwSdCpwse8VSC8D2sKnlty5EJSutrVTGinMUfGWXkOM1Q295HWF_Uif1oeewPFyI-knr5hxINoart4LdYGeVkn4Lm18sMn_CneRVmU5kZ0vSwJkoUsKps0NVjvjY85Qh5ZWg-k_2xxCDQxCR63TJTa9eyGFerelpw2DE4dLbL1l_d-vGLo1t-6CcMXve4hnfzlc5SZ-VZPosE1GsE1ZurtTDWhp38MBBTVVr13D0HA9vG8xRqoMWDTeIvtZn7_QlUFsJDmVKmz9eRbSHw0rsFJWsh8tsppfGgcYqDU0nuineEvpXOy59dpPi4wv7hWWTJdn_jtJpJmyMaZRqaDBA16JcVZ7qRT3B3Wdt7NE0Q9_6FVrSYNzHw2Y-Cw1kyY-d4XFu2tuDi4IqMmm0Q5Z22GMgKr9Q5ScB3ETPNemck3TzfdzXezJvMVRv1IgJ_YdQrGDp2bG59E65ns3FbaJnbM59DtFCqgMsqEYAMw6ik85Np5K0oylIV0GuLHGJLa8bv7qirEjeiPq_tAXlEquw=w312-h462-no",
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
        "name": "Mark",
        "photo": "https://lh3.googleusercontent.com/QY7vT0XxhpzgvpTCwq1NdQAQ8EfrLCCMcyX5QzG87hL_WbRLY7rdZ_zvy7rWzyGwwgmoKDvNXZQnraBUZWltwSdCpwse8VSC8D2sKnlty5EJSutrVTGinMUfGWXkOM1Q295HWF_Uif1oeewPFyI-knr5hxINoart4LdYGeVkn4Lm18sMn_CneRVmU5kZ0vSwJkoUsKps0NVjvjY85Qh5ZWg-k_2xxCDQxCR63TJTa9eyGFerelpw2DE4dLbL1l_d-vGLo1t-6CcMXve4hnfzlc5SZ-VZPosE1GsE1ZurtTDWhp38MBBTVVr13D0HA9vG8xRqoMWDTeIvtZn7_QlUFsJDmVKmz9eRbSHw0rsFJWsh8tsppfGgcYqDU0nuineEvpXOy59dpPi4wv7hWWTJdn_jtJpJmyMaZRqaDBA16JcVZ7qRT3B3Wdt7NE0Q9_6FVrSYNzHw2Y-Cw1kyY-d4XFu2tuDi4IqMmm0Q5Z22GMgKr9Q5ScB3ETPNemck3TzfdzXezJvMVRv1IgJ_YdQrGDp2bG59E65ns3FbaJnbM59DtFCqgMsqEYAMw6ik85Np5K0oylIV0GuLHGJLa8bv7qirEjeiPq_tAXlEquw=w312-h462-no",
        "scores" :[
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },{
        "name": "Daniel",
        "photo": "https://lh3.googleusercontent.com/mH4W_gnt7rpJYvr1l12qCNlG09KgS-u_q6KB1hHQebiR0GxB3WlF8FkDmpT9uzLRRUkbwRHms-daKiRaGLlDCYDQ4EglbcxqHLm4uj9Y0ZunW0F1Ou2O9WvaeuPBCqtwh_60rYRcQe5HVJAfCPQjUUgFDHF_avnjYffx8yvkUXoTIa4NvTCDMtMCQ7Jjqw4e_jtjH-qj1iFb8yCzFHFfO8GFo1Y3uZbz6lff1SvZEdUoUe93UQpTTuEH_8IpKXbUfy4wQ2nVy3Hudr8RuHl30aZuy_atte_4Py-Q5SPyUfKiMsFQ4J40aSgk65xcDOFB5R-MUmUBWpVypMFIDKz_dB4_-kjMll-iZgsW3JE9r7w0oi5S5eZC543xFAFKLyc13HksJtODhlwrNxDsrDzYi_3CnsLvU620B97ni6GPDJokV402C7LWqrbfGClVJhPlSmRADT5GQcNcdy7EVTatxm32vSoxftrdgFJNrzxXzC-RiMXnD2pd1gGDdiupXlwJJlOS_6hJvRb2nOn6omJmDuSlO4A-7oTnVo0Rc-EHJCoznpCKDMjCwdX5C0mm3eKpmqbQXSc_vwSPVDJu5ZM9TL13p4XyM-bXMjDpmOA=w375-h458-no",
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
