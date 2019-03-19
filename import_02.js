const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');

const CONFIG =  require('./config.json');

// loading internal libs
const SCHEMA = require('./lib/schema.js');
SCHEMA.initSchemas();

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`, function(error) {
  console.log(error);
});
var db = mongoose.connection;

let collections = SCHEMA.mongooseModelByName('collect'); collections.remove({}, (err) => console.log(err));
let hist = SCHEMA.mongooseModelByName('_history'); hist.remove({}, (err) => console.log(err));



let l = ['0','en','nl','fr','de','ar','it','gr']
let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/collections.json`, 'utf8'));
let refs = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/references.json`, 'utf8'));
let ids = [];
let hist_import = [];
let hist_create = [];
let list = {};
for (var i = 0; i < s.length; i++) {
  let a = {
    name: s[i].title[0],
    identifier: [`ADLIB:${s[i].priref[0]}`],
    creator: [],
    classification: [],
    _history: []
  }
  if(s[i].description) a.description = s[i].description[0];
  if(s[i]['production.date.start']) a.beginOfExistence = s[i]['production.date.start'][0];
  if(s[i]['production.date.end']) a.endOfExistence = s[i]['production.date.end'][0];
  if(s[i]['current_owner.lref']) a.creator.push({id: refs[`ADLIBPEOPLE:${s[i]['current_owner.lref'][0]}`], note: 'imported from Adlib'});
  ids.push(a);
  let b = {
    "editDate": Date.now(),
    "editUser": refs[`choffmann`],
    "editType": "import",
    "data": JSON.stringify(s[i])
  }
  hist_import.push(b);
  b = {
    "editDate": Date.now(),
    "editUser": refs[`choffmann`],
    "editType": "create",
    "data": JSON.stringify(a)
  }
  hist_create.push(b);
}
console.log(hist_import);
hist.insertMany(hist_import, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    ids[i]._history.push(docs[i]['_id']);
  }
  hist.insertMany(hist_create, function(error, docs) {
    for (let i = 0; i < docs.length; i++) {
      ids[i]._history.push(docs[i]['_id']);
    }
    collections.insertMany(ids, function(error, docs) {
      for (let i = 0; i < docs.length; i++) {
        refs[docs[i]['identifier'][0]] = docs[i]['_id'];
      }
      fs.writeFileSync('import/references.json', JSON.stringify(refs, null, 2));
      fs.writeFileSync('import/collection_mapped.json', JSON.stringify(ids, null, 2));
      fs.writeFileSync('import/collection_history_import.json', JSON.stringify(hist_import, null, 2));
      fs.writeFileSync('import/collection_history_create.json', JSON.stringify(hist_create, null, 2));
    });
  });
});
