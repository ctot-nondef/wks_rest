const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');
const request = require('request');

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



function downloadArray(uri){
  if(uri.length > 0){
    console.log(uri[0]);
    let fn = uri[0].split('/').splice(-1)[0].split('?')[0];
    console.log(fn);
    request(uri.shift()).pipe(fs.createWriteStream(`asset/userimg/${fn}`)).on('close', function() {
      filelist.push(`asset/userimg/${fn}`)
      downloadArray(uri);
    });
  }
  else {
    for (var i = 0; i < filelist.length; i++) {
      assetrefs.push({
        "name": filelist[i].split('/').splice(-1)[0],
        "path": filelist[i],
        "mimetype":"image/jpeg"
      })
    }
    assets.insertMany(assetrefs, function(error, docs) {
      for (var i = 0; i < docs.length; i++) {
        ids[i].images = [{
          name: filelist[i].split('/').splice(-1)[0],
          reference: docs[i]._id
        }];
      }
      fs.writeFileSync('import/users_mapped.json', JSON.stringify(ids, null, 2));
    });
  }
};

const APIS = buildFetchers();

// loading internal libs
const SCHEMA = require('./lib/schema.js');
SCHEMA.initSchemas();

const USER = require('./lib/auth.js');
USER.initUser();

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`, function(error) {
  console.log(error);
});
var db = mongoose.connection;

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
let users = USER.User;
//SCHEMA.mongooseModelByName('_user'); users.remove({}, (err) => console.log(err));
let assets = SCHEMA.mongooseModelByName('assetref'); assets.remove({}, (err) => console.log(err));

let l = ['0','en','nl','fr','de','ar','it','gr']
let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/users.json`, 'utf8'));
let ids = [];
let imgurls = [];
let filelist = [];
let assetrefs = [];
for (var i = 0; i < s.length; i++) {
  let a = {
    firstName: s[i].firstName,
    lastName: s[i].lastName,
    email : s[i].email[0],
    identifier: `VCHCWEBSITE:${s[i].name}`,
    password: "$2b$10$VgkUxb4Pd7sh0RXnXhUpbenqKHXfBmXBwxi9SJf9yK8wg03WfCqI.",
    username: `${s[i].firstName.split(' ').slice(-1)[0][0].toLowerCase()}${s[i].lastName.toLowerCase()}`
  }
  if(s[i].image) {
    for (var y = 0; y < s[i].image.length; y++) {
      imgurls.push(s[i].image[y].url);
    }
  }
  ids.push(a);
}
//downloadArray(imgurls);

let usersmapped = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/users_mapped.json`, 'utf8'));
users.insertMany(usersmapped, function(error, docs) {
  console.log(docs);
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
