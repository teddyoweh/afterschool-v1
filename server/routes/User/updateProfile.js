const express = require("express");
const updateProfile = express.Router();

const User = require("../../models/user");

updateProfile.post("/updateProfile", (req, res) => {
  const filter =    { email: req.body.email  };
  const update = {    first_name : req.body.first_name,
    last_name : req.body.last_name,
    snapchat : req.body.snapchat,
    instagram : req.body.instagram,
    linkedin : req.body.linkedin,
    twitter : req.body.twitter,
    gender : req.body.gender};
console.log(update)
console.log(filter)
 
 
  let _user = User.findOneAndUpdate(filter,{$set:update},{
      returnNewDocument: true
  }, function( error, result){
    console.log(error)
    console.log(result)
    // In this moment, you recive a result object or error

    // ... Your code when have result ... //
});
 
    res.status(200).send({'Success': true
      });
    }
  );
 

module.exports = updateProfile;
/*


 _________  ______   ______   ______   __  __    
/________/\/_____/\ /_____/\ /_____/\ /_/\/_/\   
\__.::.__\/\::::_\/_\:::_ \ \\:::_ \ \\ \ \ \ \  
   \::\ \   \:\/___/\\:\ \ \ \\:\ \ \ \\:\_\ \ \ 
    \::\ \   \::___\/_\:\ \ \ \\:\ \ \ \\::::_\/ 
     \::\ \   \:\____/\\:\/.:| |\:\/.:| | \::\ \ 
      \__\/    \_____\/ \____/_/ \____/_/  \__\/ 
                                                 



*/