const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');

const CONFIG =  require('./config.json');

const APICONFIG = {
  GND: {
    BASEURL: 'http://lobid.org/gnd/',
    ENDPOINTS: {
      BASE: '',
    },
    TIMEOUT: 15000,
    PARAMS: {
      format: 'json',
    },
    HEADERS: {},
  },
  GEO: {
    BASEURL: 'http://api.geonames.org/getJSON',
    ENDPOINTS: {
      BASE: '',
    },
    TIMEOUT: 15000,
    PARAMS: {
      formatted: 'true',
      username: 'oeaw_adlib'
    },
    HEADERS: {},
  },
};



function buildFetchers(extconf) {
  // this.$info('Helpers', 'buildFetchers(extconf)', extconf);
  const fetchers = {};
  // let ep = [];
  if (extconf) Object.assign(APICONFIG, extconf);
  const c = Object.keys(APICONFIG);
  let idx = c.length - 1;
  while (idx + 1) {
    const d = Object.keys(APICONFIG[c[idx]].ENDPOINTS);
    let idy = d.length - 1;
    fetchers[c[idx]] = {};
    while (idy + 1) {
      fetchers[c[idx]][d[idy]] = axios.create({
        baseURL: APICONFIG[c[idx]].BASEURL + APICONFIG[c[idx]].ENDPOINTS[d[idy]],
        timeout: APICONFIG[c[idx]].TIMEOUT,
        params: APICONFIG[c[idx]].PARAMS,
        headers: APICONFIG[c[idx]].HEADERS,
      });
      idy -= 1;
    }
    idx -= 1;
  }
  return fetchers;
}

function fetchArray(ids) {
  if(ids.length > 0) {
    APIS.GEO.BASE.get(``, {
      params: {
        geonameId: `${ids.shift()}`
      }
    }).then((response) => {
          authrecs.push({
            src: `${response.request.res.responseUrl}`,
            record: response.data,
          })
          console.log("success", response.request.res.responseUrl);
          fetchArray(ids);
          return null;
        }, (error) => {
          authrecs_fail.push(error.config.url);
          console.log("failure", error);
          fetchArray(ids);
        });
  }
  else {
    fs.writeFileSync('import/thesau_authrecs2.json', JSON.stringify(authrecs, null, 2));
    fs.writeFileSync('import/thesau_authrecsfail2.json', JSON.stringify(authrecs_fail, null, 2));
  }
}

const APIS = buildFetchers();

// loading internal libs
const SCHEMA = require('./lib/schema.js');
SCHEMA.initSchemas();

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`, function(error) {
  console.log(error);
});
var db = mongoose.connection;

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
let inventories = SCHEMA.mongooseModelByName('inventories'); inventories.remove({}, (err) => console.log(err));
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
    _history: []
  }
  if(s[i].description) a.description = s[i].description[0];
  if(s[i]['production.date.start']) a.beginOfExistence = s[i]['production.date.start'][0];
  if(s[i]['production.date.end']) a.endOfExistence = s[i]['production.date.end'][0];
  if(s[i]['current_owner.lref']) a.collector = refs[`ADLIBPEOPLE:${s[i]['current_owner.lref'][0]}`];
  ids.push(a);
  let b = {
    "editDate": Date.now(),
    "editUser": refs[`choffmann`],
    "editType": "import",
    "data": s[i]
  }
  hist_import.push(b);
  b = {
    "editDate": Date.now(),
    "editUser": refs[`choffmann`],
    "editType": "create",
    "data": a
  }
  hist_create.push(b);
}

fs.writeFileSync('import/inventories_mapped.json', JSON.stringify(ids, null, 2));

// hist.insertMany(hist_import, function(error, docs) {
//   for (let i = 0; i < docs.length; i++) {
//     ids[i]._history.push(docs[i]['_id']);
//   }
//   hist.insertMany(hist_create, function(error, docs) {
//     for (let i = 0; i < docs.length; i++) {
//       ids[i]._history.push(docs[i]['_id']);
//     }
//     collections.insertMany(ids, function(error, docs) {
//       for (let i = 0; i < docs.length; i++) {
//         refs[docs[i]['identifier'][0]] = docs[i]['_id'];
//       }
//       fs.writeFileSync('import/references.json', JSON.stringify(refs, null, 2));
//       fs.writeFileSync('import/inventories_mapped.json', JSON.stringify(ids, null, 2));
//       fs.writeFileSync('import/inventories_history_import.json', JSON.stringify(hist_import, null, 2));
//       fs.writeFileSync('import/inventories_history_create.json', JSON.stringify(hist_create, null, 2));
//     });
//   });
// });


// let o = s.adlibJSON.recordList.record;
// fs.writeFileSync('import/thesau.json', JSON.stringify(o, null, 2));
// let ids = [];
// let list = {};
// for (var i = 0; i < s.length; i++) {
//   if(s[i]['term.type'] && !list[s[i]['term.type'][0].value[0]]) {
//     list[s[i]['term.type'][0].value[0]] = 'done';
//     let a = {
//       "name": s[i]['term.type'][0].value[0],
//       "description": "Class of Descriptor",
//       "labels": []
//     }
//     for(var y = 0; y < s[i]['term.type'][0].value.length; y++) {
//       a.labels.push({
//         lang: l[y],
//         label: s[i]['term.type'][0].value[y]
//       })
//     }
//     ids.push(a)
//   }
// }

// let ids = [];
// for (var i = 0; i < s.length; i++) {
  // if(s[i].source) {
  //   for (var y = 0; y < s[i].source.length; y++) {
  //     console.log(s[i].source[y]);
  //     if (s[i].source[y] == "Geonames" && s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1] != "") {
  //       ids.push(s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]);
  //       //ids.push(s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]);
  //     }
  //   }
  // }
// }
//fetchArray(ids);
//console.log(ids);

//fs.writeFileSync('import/actors.json', JSON.stringify(ids, null, 2));
