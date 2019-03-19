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

let inventories = SCHEMA.mongooseModelByName('inventory'); inventories.remove({}, (err) => console.log(err));
let hist = SCHEMA.mongooseModelByName('_history');



let l = ['0','en','nl','fr','de','ar','it','gr']
let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/inventories.json`, 'utf8'));
let refs = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/references.json`, 'utf8'));
let ids = [];
let hist_import = [];
let hist_create = [];
let list = {};
for (var i = 0; i < s.length; i++) {
  let a = {
    name: s[i].title[0],
    identifier: [`ADLIB:${s[i].priref[0]}`],
    _history: [],
    creator: [],
    classification: [],
    partOf: refs[`ADLIB:${s[i]['part_of_reference.lref'][0]}`]
  }
  if(s[i].description) a.description = s[i].description[0];
  if(s[i]['production.date.start']) a.beginOfExistence = s[i]['production.date.start'][0];
  if(s[i]['production.date.end']) a.endOfExistence = s[i]['production.date.end'][0];
  if(s[i]['production.notes']) a.comments = s[i]['production.notes'];
  if(s[i]['current_owner.lref']) a.creator.push({id: refs[`ADLIBPEOPLE:${s[i]['current_owner.lref'][0]}`], note: 'import from Adlib Field current_owner'});
  if(s[i]['alternative_number'] && s[i]['alternative_number.institution']) a.identifier.push(`${s[i]['alternative_number.institution'][0]}:${s[i]['alternative_number'][0]}`);
  if(s[i]['phys_characteristic.keyword.lref']) a.classification.push({descriptor: refs[`ADLIBTHESAU:${s[i]['phys_characteristic.keyword.lref'][0]}`], note: 'import from Adlib Field phys_characteristic'});

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

hist.insertMany(hist_import, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    ids[i]._history.push(docs[i]['_id']);
  }
  hist.insertMany(hist_create, function(error, docs) {
    for (let i = 0; i < docs.length; i++) {
      ids[i]._history.push(docs[i]['_id']);
    }
    inventories.insertMany(ids, function(error, docs) {
      for (let i = 0; i < docs.length; i++) {
        refs[docs[i]['identifier'][0]] = docs[i]['_id'];
      }
      fs.writeFileSync('import/references.json', JSON.stringify(refs, null, 2));
      fs.writeFileSync('import/inventories_mapped.json', JSON.stringify(ids, null, 2));
      fs.writeFileSync('import/inventories_history_import.json', JSON.stringify(hist_import, null, 2));
      fs.writeFileSync('import/inventories_history_create.json', JSON.stringify(hist_create, null, 2));
    });
  });
});
