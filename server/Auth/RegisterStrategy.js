const Strategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function (req, email, password, done) {
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }
        if (user) {
          return done("User already exist. Please login!", null);
        }
        let userType =''
        if(email.endsWith('@go.tarleton.edu')){
          userType = 'student'
        }
        else if(email.endsWith('@tarleton.edu')){
          userType = 'faculty'
        }
        else{
          return done("Most be a @go.tarleton.edu or @tarleton.edu email", null);}

        if (!user) {
          const encryptedPassword = bcrypt.hashSync(password, salt);
          const { first_name, last_name } = req.body;
let blank ='';
let snapchat = blank;
let instagram = blank;
let linkedin = blank;
let twitter = blank;
          let newUser = new User({
            email,
            password: encryptedPassword,
            first_name,
            last_name,
            userType,
            gender,
       snapchat,
       instagram,
       linkedin,
       twitter,

          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
       
      });
  }
);

module.exports = SignupStrategy;
