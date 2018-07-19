const fs = require('fs');
const generator = require('mongoose-gen');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
const swaggerJSDoc = require('swagger-jsdoc');

const CONFIG =  require('../config.json');
const options = {
  swaggerDefinition: {
    info: {
      title: CONFIG.meta.title, // Title (required)
      version: CONFIG.version, // Version (required)
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
    this.swaggerSpec = swaggerJSDoc(options);
    let fn = fs.readdirSync(CONFIG.schemas.dir);
    for (i = 0; i < fn.length; i ++) {
      if(/.*\.json/.test(fn[i])){
        let s = JSON.parse(fs.readFileSync(`${CONFIG.schemas.dir}/${fn[i]}`, 'utf8'));
        this.rawjson[i] = s;
        this.schemas[i] = new mongoose.Schema(generator.convert(s));
        this.names[i] = fn[i].split('.')[0];
        this.swaggerSpec.paths[`/api/v1/${this.names[i]}`] = {
          "get" : {
            "description":`Returns a List of ${this.names[i]}s`,
            "produces":["application/json"],
            "responses":{
              200:{
                "description":`Returns a List of ${this.names[i]}`,
                "schema":{"$ref":`#/definitions/${this.names[i]}`}
              }
            }
          },
          "post" : {
            "description":`Creates a new instance of ${this.names[i]}`,
            "produces":["application/json"],
            "consumes":["application/json"],
            "parameters":[{
              "name":this.names[i],
              "in":"body",
              "required":true,
              "schema":{"$ref":`#/definitions/${this.names[i]}`}
            }],
            "responses":{
              200:{
                "description":`The created instance of ${this.names[i]}`,
                "schema":{"$ref":`#/definitions/${this.names[i]}`}
              }
            }
          }
        }
        this.swaggerSpec.definitions[this.names[i]] = this.schemas[i].jsonSchema();
      }
    }

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
