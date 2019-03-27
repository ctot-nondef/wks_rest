const fs = require('fs');
const mongoose = require('mongoose');
const generator = require('mongoose-gen');
const bcrypt = require('bcrypt');

const CONFIG =  require('../config.json');


module.exports = {
  rawjson : {},
  UserSchema: {},
  User: {},
  initUser(usermodel) {
    //authenticate input against database
    usermodel.prototype.authenticate = function (username, password, callback) {
      usermodel.findOne({ username: username })
        .exec(function (err, user) {
          if (err) {
            return callback(err)
          } else if (!user) {
            var err = new Error('User not found.');
            err.status = 401;
            return callback(err);
          }
          bcrypt.compare(password, user.password, function (err, result) {
            if (result === true) {
              return callback(null, user);
            } else {
              return callback();
            }
          })
        });
    };
    usermodel._middleware.pre('save', function (next) {
      var user = this;
      bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      })
    });
    this.User = usermodel;
  },
  chkSession(req,res,next) {
    if(req.session && req.session.userId) {
      return next();
    } else {
      res.status(401).json({error:'Session expired or invalid. Please Log in.'});
    }
  }
}
