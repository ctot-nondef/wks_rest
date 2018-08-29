const fs = require('fs');
const mongoose = require('mongoose');

const CONFIG =  require('../config.json');

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
  }

}
