const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');
const uid = require('uniqid');

const CONFIG =  require('./config.json');

// loading internal libs
const SCHEMA = require('./lib/schema.js');
const ASSETS = require('./lib/asset.js');
SCHEMA.initSchemas();

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`, function(error) {
  console.log(error);
});
var db = mongoose.connection;

let entries = SCHEMA.mongooseModelByName('entry'); entries.remove({}, (err) => console.log(err));
let assetrefs = SCHEMA.mongooseModelByName('assetref');
let hist = SCHEMA.mongooseModelByName('_history');

let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/all_assets.json`, 'utf8'));
for (var i = 0; i < s.length; i++) {
  assetrefs.find({name: s[i].name}, (err, ref) => {
    if (err) console.log(err);
    let name = `${uid()}_${ref[0].name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
    fs.copyFile(`./asset/uploads/import/${ref[0].name}`, `${CONFIG.assets.dir}/${name}.${ref[0].name.split('.').slice(-1)[0]}`, async function(err) {
      assetrefs.findByIdAndUpdate(ref[0]._id, { $set: { name, path: `${CONFIG.assets.dir}/${name}.${ref[0].name.split('.').slice(-1)[0]}` } }, function(err, result) {
          if(err){
              console.log(err);
          }
          console.log("RESULT: " + result);
      });
      ASSETS.makeImgThumb(`${name}.${ref[0].name.split('.').slice(-1)[0]}`, {width: 220, height: 220}, 90, 'thumb').then((a) => {
        ASSETS.makeImgThumb(`${name}.${ref[0].name.split('.').slice(-1)[0]}`, {width: 1500, height: 1500}, 90, 'preview').then((b) => {

        });
      });
    });
  });
}
