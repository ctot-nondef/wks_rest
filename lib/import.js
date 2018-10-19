const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');
const request = require('request');
const SCHEMA = require('../lib/schema.js');
const CONFIG =  require('../config.json');

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
APIS = buildFetchers();


module.exports = {
  files: [],
  jobs: [],
  mappings: [],
  fetchJobList(importcol) {
    let fn = fs.readdirSync(CONFIG.import.dir);
    for (i = 0; i < fn.length; i++) {
      if(/.*\.json/.test(fn[i])){
        // let s = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${fn[i]}`, 'utf8'));
        importcol.findOne({name: fn[i].split('.')[0]})
          .exec(function (err, imp) {
            if (err) {
              return err
            } else if (!imp) {
              return [];
            }
            this.jobs.push(imp)
          });
      }
    }
    return this.files;
  },
  fetchAuthRecs(ids, endpoint, queryparam, success, fail, entity) {
    return new Promise(function(resolve, reject){
      if(ids.length > 0) {
        let a = { params: {}};
        a.params[queryparam] = `${ids.shift()}`;
        endpoint.get(``, a).then((response) => {
              success.push({
                src: `${response.request.res.responseUrl}`,
                record: response.data,
              })
              console.log("success", response.request.res.responseUrl);
              fetchAuthRecs(ids, endpoint, queryparam, success, fail, file).then(() => {
                Promise.resolve(array);
              });
            }, (error) => {
              fail.push(error.config.url);
              console.log("failure", error);
              fetchAuthRecs(ids, endpoint, queryparam,  success, fail, file).then(() => {
                Promise.resolve(array);
              });
            });
      }
      else {
        fs.writeFileSync(`data/${entity}_records.json`, JSON.stringify(success, null, 2));
        fs.writeFileSync(`data/${entity}_fail.json`, JSON.stringify(fail, null, 2));
      }
    });
  },
  fetchSources(){

  }
}
