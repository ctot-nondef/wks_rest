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
let descriptors = SCHEMA.mongooseModelByName('descriptor'); descriptors.remove({}, (err) => console.log(err));
let actors = SCHEMA.mongooseModelByName('actor'); actors.remove({}, (err) => console.log(err));
let history = SCHEMA.mongooseModelByName('_history'); history.remove({}, (err) => console.log(err));
let authrec = SCHEMA.mongooseModelByName('authrec'); authrec.remove({}, (err) => console.log(err));

var authrecs = [];
var authrecs_fail = [];
let rec = [];
var refs = {};
let pc = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_classes.json`, 'utf8'));
let dc = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/thesau_classes.json`, 'utf8'));
let ta = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/thesau_authrecs.json`, 'utf8'));
let pa = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/people_authrecs.json`, 'utf8'));
descriptors.insertMany(pc, function(error, docs) {
  for (let i = 0; i < docs.length; i++) {
    refs[docs[i]['name']] = docs[i]['_id'];
  }
  authrec.insertMany(pa, function(error, docs) {
    for (let i = 0; i < docs.length; i++) {
      refs[docs[i]['record']['gndIdentifier']] = docs[i]['_id'];
    }
    descriptors.insertMany(dc, function(error, docs) {
      for (let i = 0; i < docs.length; i++) {
        refs[docs[i]['name']] = docs[i]['_id'];
      }
      authrec.insertMany(ta, function(error, docs) {
        for (let i = 0; i < docs.length; i++) {
          refs[docs[i]['record']['gndIdentifier']] = docs[i]['_id'];
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
                console.log(refs[s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]]);
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
          });
        });
      });
    });
  });
});



// let l = ['0','en','nl','fr','de','ar','it','gr']
// let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/${process.argv[2]}.json`, 'utf8'));
// let ids = [];
// let list = {};
// for (var i = 0; i < s.length; i++) {
//   let a = {
//     name: s[i].name[0],
//     _labels : [],
//     identifier: [],
//     _authorityRecs: []
//   }
//   if(s[i]['name.type']) a.instanceOf = refs[s[i]['name.type'][0].value[0]];
//   if(s[i].biography) a.description = s[i].biography[0];
//   if(s[i].surname) a._labels.push({kind: 'lastName', label: s[i].surname[0]});
//   if(s[i].forename) a._labels.push({kind: 'firstName', label: s[i].forename[0]});
//   if(s[i].title) a._labels.push({kind: 'title', label: s[i].title[0]});
//   if(s[i].prefixes_to_name) a._labels.push({kind: 'prefixToName', label: s[i].prefixes_to_name[0]});
//   if(s[i]['birth.date.start']) a.beginOfExistence = s[i]['birth.date.start'][0];
//   if(s[i]['death.date.start']) a.endOfExistence = s[i]['death.date.start'][0];
//   if(s[i].source) {
//     for (var y = 0; y < s[i].source.length; y++) {
//       a.identifier.push(`${s[i].source[y]}:${s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]}`);
//       console.log(s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]);
//       if (refs[s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]]) {
//         a._authorityRecs.push({
//           record: refs[s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]]
//         });
//       }
//     }
//   }
//   ids.push(a);
// }
// fs.writeFileSync('import/actors.json', JSON.stringify(ids, null, 2));



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
