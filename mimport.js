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
  }
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
    APIS.GND.BASE.get(`${ids.shift()}/`).then((response) => {
          authrecs.push({
            src: `${response.config.url}`,
            record: response.data,
          })
          console.log("success", ids.length);
          fetchArray(ids);
          return null;
        }, (error) => {
          authrecs_fail.push(error.config.url);
          console.log("failure", ids.length);
          fetchArray(ids);
        });
  }
  else {
    fs.writeFileSync('import/people_authrecs.json', JSON.stringify(authrecs, null, 2));
    fs.writeFileSync('import/people_authrecsfail.json', JSON.stringify(authrecs_fail, null, 2));
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
let descriptors = SCHEMA.mongooseModelByName('descriptor'); descriptors.remove({}, (err) => console.log(err));
let actors = SCHEMA.mongooseModelByName('actor'); actors.remove({}, (err) => console.log(err));
let history = SCHEMA.mongooseModelByName('_history'); history.remove({}, (err) => console.log(err));
let authrec = SCHEMA.mongooseModelByName('authrec'); authrec.remove({}, (err) => console.log(err));

var authrecs = [];
var authrecs_fail = [];
let rec = [];
var refs = {};
let ca = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_classes.json`, 'utf8'));
let pa = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_authrecs.json`, 'utf8'));
descriptors.insertMany(ca, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    refs[docs[i]['name']] = docs[i]['_id'];
  }
  authrec.insertMany(pa, function(error, docs) {
    for (let i = 0; i < docs.length; i++) {
      refs[docs[i]['src']] = docs[i]['_id'];
    }
    console.log(refs);
  });
});


let l = ['0','en','nl','fr','de','ar','it','gr']
let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/${process.argv[2]}.json`, 'utf8'));
//let o = s.adlibJSON.recordList.record;
//fs.writeFileSync('import/people.json', JSON.stringify(o, null, 2));
let ids = [];
for (var i = 0; i < s.length; i++) {
  if(s[i].source) {
    for (var y = 0; y < s[i].source.length; y++) {
      if (s[i].source[y] == "GND" && s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1] != "") {
        ids.push(s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]);
      }
    }
  }
}
//fetchArray(ids);
console.log(refs);

//fs.writeFileSync('import/people_mapped.json', JSON.stringify(rec, null, 2));
