const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');

const IMPORT = require('./lib/import.js');

const CONFIG =  require('./config.json');
const JOBS = require('./import_jobs.json')

let jobs = Object.keys(JOBS);

let idx = jobs.length - 1;
while(idx+1) {
  ////////////////////////////////////////////////////////////////
  // fetch all resources
  let sources = JOBS[jobs[idx]].sources;
  console.log(jobs[idx], sources);
  // IMPORT.fetchSources(sources.keys, sources.uris, sources.paths);
  /////////////////////////////////////////////////////////////////
  //fetch required authority data from GeoNames
  let geoids = [];
  let idy = JOBS[jobs[idx]].authority.keys.length - 1;
  while(idy+1) {
    let s = JSON.parse(fs.readFileSync(`${CONFIG.import.dir}/data/source_${JOBS[jobs[idx]].authority.keys[idy]}.json`, 'utf8'));
    for (var i = 0; i < s.length; i++) {
      if(s[i].source) {
        for (var y = 0; y < s[i].source.length; y++) {
          if (s[i].source[y] == "Geonames" && s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1] != "") {
            geoids.push(s[i]['term.number'][y].split('/')[s[i]['term.number'][y].split('/').length - 1]);
            //ids.push(s[i]['source.number'][y].split('/')[s[i]['source.number'][y].split('/').length - 1]);
          }
        }
      }
    }
    idy -= 1;
  }
  IMPORT.fetchAuthRecs(geoids, IMPORT.endpoints.GEO.BASE, 'geonameId', [], [], 'geonames');




  idx -= 1;
}
