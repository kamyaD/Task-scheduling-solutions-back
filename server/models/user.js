const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const passport = require("passport");
const jwt = require('jsonwebtoken');

const saltRounds = 10;


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });

  bcrypt.hash("123456", saltRounds, function(err, hash) {
    User.create(
        {phone: "0722222222", password: hash}
    );
  });

  User.authenticate = async function(req, res, next, getAuthUser) {
    passport.use(new LocalStrategy({
          usernameField: 'phone',
          passwordField: 'password',
          passReqToCallback: true,
          session: false
        },
        async function (req, phone, password, done) {
         const user =  await User.findOne({ where: { phone }});
         if(bcrypt.compareSync(password, user.password)){
           done(null,  await user.authorize(user))
         }
        }
    ));

    passport.authenticate('local',{ session: false },function(err, user, info) {
      if (err) { return next(err); }
      if(!user)  res.status(400).send("User not Found");
      if(user){
         getAuthUser(user);
      }
    })(req, res, next);
  };

  User.prototype.authorize = async function (user) {
    const secret  = process.env.SECRET_KEY;
    const token = jwt.sign({
      data: user
    }, secret, { expiresIn: '24h' });

    return {
      "reset_password": 0,
      "accessToken": token,
      "expires_in": "24h"
    }
  };

  return User;
};
