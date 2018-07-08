const fs = require('fs');
const generator = require('mongoose-gen');

const CONFIG =  require('../config.json');

module.exports = {
  rawjson: [],
  schemas: [],
  names: [],
  fetchSchemas() {
    let fn = fs.readdirSync(CONFIG.schemas.dir);
    for (i = 0; i < fn.length; i ++) {
      if(/.*\.json/.test(fn[i])){
        console.log(fn[i]);
        let s = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${fn[i]}`, 'utf8'));
        this.rawjson[i] = s;
        this.schemas[i] = generator.convert(s);
        this.names[i] = fn[i].split('.')[0];
      }
    }
    fs.writeFile('mongoose.json', JSON.stringify(this.schemas,null,2));
    return this.schemas;
  }
};
