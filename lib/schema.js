const fs = require('fs');
const generator = require('mongoose-gen');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
const swaggerJSDoc = require('swagger-jsdoc');

const CONFIG =  require('../config.json');
const options = {
  swaggerDefinition: {
    info: {
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  apis: ['routes/router.js'], // Path to the API docs
};



module.exports = {
  rawjson: [],
  schemas: [],
  names: [],
  swaggerSpec: {},
  initSchemas() {
    let fn = fs.readdirSync(CONFIG.schemas.dir);
    for (i = 0; i < fn.length; i ++) {
      if(/.*\.json/.test(fn[i])){
        let s = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${fn[i]}`, 'utf8'));
        this.rawjson[i] = s;
        this.schemas[i] = new mongoose.Schema(generator.convert(s));
        this.names[i] = fn[i].split('.')[0];
      }
    }
    this.swaggerSpec = swaggerJSDoc(options);
    //fs.writeFile('mongoose.json', JSON.stringify(this.schemas,null,2));
    //return this.schemas;
  },
  jsonSchemaByName(name) {
    for (i = 0; i < this.names.length; i ++) {
      if(name == this.names[i]){
        //we can put some additional logic here
        return this.schemas[i].jsonSchema();
      }
    }
    return false;
  }
};
