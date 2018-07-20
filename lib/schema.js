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
        if(!/_.*/.test(fn[i])) this.addMongooseAPISpec(this.swaggerSpec, this.names[i], this.schemas[i]);
      }
    }
  },
  jsonSchemaByName(name) {
    for (i = 0; i < this.names.length; i ++) {
      if(name == this.names[i]){
        //we can put some additional logic here
        return this.schemas[i].jsonSchema();
      }
    }
    return false;
  },
  addMongooseAPISpec(swaggerSpec, name, schema ) {
    swaggerSpec.paths[`/api/v1/${name}/count`] = {
      "get" : {
        "description":`Returns the number of documents of type ${name}`,
        "produces":["application/json"],
        "responses":{
          200:{
            "description":`Document Count of ${name}`,
          }
        }
      },
    }
    swaggerSpec.paths[`/api/v1/${name}`] = {
      "get" : {
        "description":`Returns a List of ${name}s`,
        "produces":["application/json"],
        "responses":{
          200:{
            "description":`Returns a List of ${name}`,
            "schema":{"$ref":`#/definitions/${name}`}
          }
        }
      },
      "post" : {
        "description":`Creates a new instance of ${name}`,
        "produces":["application/json"],
        "consumes":["application/json"],
        "parameters":[{
          "name":name,
          "in":"body",
          "required":true,
          "schema":{"$ref":`#/definitions/${name}`}
        }],
        "responses":{
          200:{
            "description":`The created instance of ${name}`,
            "schema":{"$ref":`#/definitions/${name}`}
          }
        }
      }
    }
    swaggerSpec.definitions[name] = schema.jsonSchema();
  }
};
