const fs = require('fs');
const mongoose = require('mongoose');
const generator = require('mongoose-gen');
const bcrypt = require('bcrypt');

const CONFIG =  require('../config.json');



module.exports = {
  rawjson : {},
  UserSchema: {},
  initUser() {
    this.rawjson = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${CONFIG.auth.usercol}.json`, 'utf8'));
    this.UserSchema = new mongoose.Schema(generator.convert(this.rawjson));
    //authenticate input against database
    UserSchema.statics.authenticate = function (email, password, callback) {
      User.findOne({ email: email })
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
    //hashing a password before saving it to the database
    UserSchema.pre('save', function (next) {
      var user = this;
      bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      })
    });
  }
}
