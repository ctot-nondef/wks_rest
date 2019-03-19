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

let descriptors = SCHEMA.mongooseModelByName('descriptor'); descriptors.remove({}, (err) => console.log(err));
let actors = SCHEMA.mongooseModelByName('actor'); actors.remove({}, (err) => console.log(err));
let history = SCHEMA.mongooseModelByName('_history'); history.remove({}, (err) => console.log(err));
let authrec = SCHEMA.mongooseModelByName('authrec'); authrec.remove({}, (err) => console.log(err));
let users = SCHEMA.mongooseModelByName('_user'); users.remove({}, (err) => console.log(err));

var authrecs = [];
var authrecs_fail = [];
let rec = [];
var refs = {};
let um = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/users_mapped.json`, 'utf8'));
let pc = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_classes.json`, 'utf8'));
let dc = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/thesau_classes.json`, 'utf8'));
let ta = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/thesau_authrecs.json`, 'utf8'));
let pa = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_authrecs.json`, 'utf8'));
users.insertMany(um, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    refs[docs[i]['username']] = docs[i]['_id'];
  }
  console.log(refs);
  descriptors.insertMany(pc, function(error, docs) {
    console.log(docs, error);
    for (let i = 0; i < docs.length; i++) {
      refs[docs[i]['name']] = docs[i]['_id'];
    }
    authrec.insertMany(pa, function(error, docs) {
      for (let i = 0; i < docs.length; i++) {
        refs[`gnd:${docs[i]['record']['gndIdentifier']}`] = docs[i]['_id'];
      }
      descriptors.insertMany(dc, function(error, docs) {
        for (let i = 0; i < docs.length; i++) {
          refs[docs[i]['name']] = docs[i]['_id'];
        }
        authrec.insertMany(ta, function(error, docs) {
          for (let i = 0; i < docs.length; i++) {
            refs[`gnd:${docs[i]['record']['gndIdentifier']}`] = docs[i]['_id'];
          }
          let l = ['0','en','nl','fr','de','ar','it','gr']
          let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people.json`, 'utf8'));
          let ids = [];
          let list = {};
          for (var i = 0; i < s.length; i++) {
            let a = {
              name: s[i].name[0],
              _labels : [],
              identifier: [`ADLIBPEOPLE:${s[i].priref[0]}`],
              _authorityRecs: []
            }
            if(s[i]['name.type']) a.instanceOf = refs[s[i]['name.type'][0].value[0]];
            if(s[i].biography) a.description = s[i].biography[0];
            if(s[i].surname) a._labels.push({kind: 'lastName', label: s[i].surname[0]});
            if(s[i].forename) a._labels.push({kind: 'firstName', label: s[i].forename[0]});
            if(s[i].title) a._labels.push({kind: 'title', label: s[i].title[0]});
            if(s[i].prefixes_to_name) a._labels.push({kind: 'prefixToName', label: s[i].prefixes_to_name[0]});
            if(s[i]['birth.date.start']) a.beginOfExistence = s[i]['birth.date.start'][0];
            if(s[i]['death.date.start']) a.endOfExistence = s[i]['death.date.start'][0];
            if(s[i].source) {
              for (var y = 0; y < s[i].source.length; y++) {
                a.identifier.push(`${s[i].source[y]}:${s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]}`);
                //console.log(s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]);
                if (refs[s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]]) {
                  a._authorityRecs.push({
                    record: refs[s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]]
                  });
                }
              }
            }
            ids.push(a);
          }
          fs.writeFileSync('import/actors.json', JSON.stringify(ids, null, 2));
          actors.insertMany(ids, function(error, docs) {
            for (let i = 0; i < docs.length; i++) {
              refs[docs[i]['identifier'][0]] = docs[i]['_id'];
            }
            s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/thesau.json`, 'utf8'));
            ids = [];
            list = {};
            for (var i = 0; i < s.length; i++) {
              let a = {
                name: s[i].term[0],
                _labels : [],
                identifier: [`ADLIBTHESAU:${s[i].priref[0]}`],
                _authorityRecs: []
              }
              if(s[i]['term.type']) a.instanceOf = refs[s[i]['term.type'][0].value[0]];
              if(s[i].source) {
                for (var y = 0; y < s[i].source.length; y++) {
                  a.identifier.push(`${s[i].source[y]}:${s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]}`);
                  if (refs[s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]]) {
                    a._authorityRecs.push({
                      record: refs[s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]]
                    });
                  }
                }
              }
              ids.push(a);
            }
            fs.writeFileSync('import/descriptors.json', JSON.stringify(ids, null, 2));
            descriptors.insertMany(ids, function(error, docs) {
              for (let i = 0; i < docs.length; i++) {
                refs[docs[i]['identifier'][0]] = docs[i]['_id'];
              }
              fs.writeFileSync('import/references.json', JSON.stringify(refs, null, 2));
            });
          });
        });
      });
    });
  });
});
