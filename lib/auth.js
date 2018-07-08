const fs = require('fs');
const mongoose = require('mongoose');
const generator = require('mongoose-gen');

const CONFIG =  require('../config.json');


var UserSchema = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${CONFIG.auth.usercol}.json`, 'utf8'));
var User = mongoose.model('User', generator.convert(UserSchema));
module.exports = User;
