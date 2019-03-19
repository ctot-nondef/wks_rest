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

let objects = SCHEMA.mongooseModelByName('object'); objects.remove({}, (err) => console.log(err));
let assetrefs = SCHEMA.mongooseModelByName('assetref');
let hist = SCHEMA.mongooseModelByName('_history');



let l = ['0','en','nl','fr','de','ar','it','gr']
let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/objects.json`, 'utf8'));
let refs = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/references.json`, 'utf8'));
let ids = [];
let assets = [];
let hist_import = [];
let hist_create = [];
let list = {};
for (var i = 0; i < s.length; i++) {
  let a = {
    identifier: [`ADLIB:${s[i].priref[0]}`],
    name: s[i].identification[0],
    _history: [],
    classification: [],
    creator: [],
    currentOwner: [],
    dimensions: [],
    technique: [],
    material: [],
    images: []
  }
  if(s[i].title) a.originalTitle = s[i].title[0];
  if(s[i]['inscription.content']) a.description = s[i]['inscription.content'][0];
  if(s[i]['part_of_reference.lref']) a.partOf = refs[`ADLIB:${s[i]['part_of_reference.lref'][0]}`];
  if(!s[i]['part_of_reference.lref']) console.log(s[i].priref[0]);
  if(s[i]['production.date.start']) a.created_start = s[i]['production.date.start'][0];
  if(s[i]['production.date.end']) a.created_end = s[i]['production.date.end'][0];
  if(s[i]['production.notes']) a.comments = s[i]['production.notes'];
  if(s[i]['creator.lref']) {
    for (var q = 0; q < s[i]['creator.lref'].length; q++) {
      a.creator.push({
        id: refs[`ADLIBPEOPLE:${s[i]['creator.lref'][q]}`],
        role: refs[`ADLIBTHESAU:${s[i]['creator.role.lref'][q]}`],
        qualifier: s[i]['creator.qualifier'][q],
        note: `Imported from Adlib with qualifier ${s[i]['creator.qualifier'][q]}`,
      })
    }
  }
  if(s[i]['institution.name.lref']) {
    for (var q = 0; q < s[i]['institution.name.lref'].length; q++) {
      console.log(`ADLIBPEOPLE:${s[i]['institution.name.lref'][q]}`, refs[`ADLIBPEOPLE:${s[i]['institution.name.lref'][q]}`]);
      a.currentOwner.push(refs[`ADLIBPEOPLE:${s[i]['institution.name.lref'][q]}`]);
    }
  }
  if(s[i]['phys_characteristic.keyword.lref']) {
    for (var q = 0; q < s[i]['phys_characteristic.keyword.lref'].length; q++) {
      a.classification.push({
        descriptor: refs[`ADLIBTHESAU:${s[i]['phys_characteristic.keyword.lref'][q]}`]
      });
    }
  }
  if(s[i]['production.period.lref']) {
    for (var q = 0; q < s[i]['production.period.lref'].length; q++) {
      a.classification.push({
        descriptor: refs[`ADLIBTHESAU:${s[i]['production.period.lref'][q]}`],
        note: 'Imported from Adlib field phys_characteristic'
      });
    }
  }
  if(s[i]['dimension.value']) {
    for (var q = 0; q < s[i]['dimension.value'].length; q++) {
      a.dimensions.push({
        amount: s[i]['dimension.value'][q],
        aspect: refs[`ADLIBTHESAU:${s[i]['dimension.type.lref'][q]}`],
        unit: refs[`ADLIBTHESAU:${s[i]['dimension.unit.lref'][q]}`],
      });
    }
  }
  if(s[i]['technique.lref']) {
    for (var q = 0; q < s[i]['technique.lref'].length; q++) {
      a.technique.push(refs[`ADLIBTHESAU:${s[i]['technique.lref'][q]}`]);
    }
  }
  if(s[i]['material.lref']) {
    for (var q = 0; q < s[i]['material.lref'].length; q++) {
      a.material.push(refs[`ADLIBTHESAU:${s[i]['material.lref'][q]}`]);
    }
  }
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
  if(s[i]['reproduction.reference']) {
    for (var q = 0; q < s[i]['reproduction.reference'].length; q++) {
      assets.push({
        name: s[i]['reproduction.reference'][q],
        identifier: `ADLIBIMG:${s[i]['reproduction.reference.lref'][q]}`,
        source: s[i]['reproduction.notes'][q],
        path: `asset/img/${s[i]['reproduction.reference'][q]}`,
        mimetype: "image/jpeg"
      });
    }
  }
}

// fs.writeFileSync('import/objects_mapped.json', JSON.stringify(ids, null, 2));
fs.writeFileSync('import/objects_assets.json', JSON.stringify(assets, null, 2));

assetrefs.insertMany(assets, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    for (let q = 0; q < ids.length; q++) {
      if(s[q]['reproduction.reference'] && docs[i].name == s[q]['reproduction.reference'][0]) {
        ids[q].images.push({
          name: s[q]['reproduction.reference'][0],
          reference: docs[i]['_id']
        });
      }
    }
  }
  hist.insertMany(hist_import, function(error, docs) {
    for (let i = 0; i < docs.length; i++) {
      ids[i]._history.push(docs[i]['_id']);
    }
    hist.insertMany(hist_create, function(error, docs) {
      for (let i = 0; i < docs.length; i++) {
        ids[i]._history.push(docs[i]['_id']);
      }
      objects.insertMany(ids, function(error, docs) {
        for (let i = 0; i < docs.length; i++) {
          refs[docs[i]['identifier'][0]] = docs[i]['_id'];
        }
        fs.writeFileSync('import/references.json', JSON.stringify(refs, null, 2));
        fs.writeFileSync('import/objects_mapped.json', JSON.stringify(ids, null, 2));
        fs.writeFileSync('import/objects_history_import.json', JSON.stringify(hist_import, null, 2));
        fs.writeFileSync('import/objects_history_create.json', JSON.stringify(hist_create, null, 2));
      });
    });
  });
});
