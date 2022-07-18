const express = require("express");
const User = express.Router();

const getDetails = require("./getDetails");
const updateProfile = require("./updateProfile");
User.use("", getDetails,updateProfile);

module.exports = User;
/*


 _________  ______   ______   ______   __  __    
/________/\/_____/\ /_____/\ /_____/\ /_/\/_/\   
\__.::.__\/\::::_\/_\:::_ \ \\:::_ \ \\ \ \ \ \  
   \::\ \   \:\/___/\\:\ \ \ \\:\ \ \ \\:\_\ \ \ 
    \::\ \   \::___\/_\:\ \ \ \\:\ \ \ \\::::_\/ 
     \::\ \   \:\____/\\:\/.:| |\:\/.:| | \::\ \ 
      \__\/    \_____\/ \____/_/ \____/_/  \__\/ 
                                                 



*/