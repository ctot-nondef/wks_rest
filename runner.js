const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();
const http = require('https');

const CONFIG =  require('./config.json');

const SCHEMA = require('./lib/schema.js');


app.use(bodyParser.json());
app.use(methodOverride());



mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`)
// create API for each schema in schemas JSON

SCHEMA.fetchSchemas();
for (i = 0; i < SCHEMA.schemas.length; i ++) {
  restify.serve(router, mongoose.model(SCHEMA.names[i], SCHEMA.schemas[i]));
};

app.use(router);
app.listen(3001, () => {
  console.log('Express server listening on port 3001')
});





// ** setup with dynamic schema from different endpoint
// ** requires different mode of authentication
// http.get('https://wksrest.hephaistos.arz.oeaw.ac.at/wkstest/schemas/', (res) => {
//     var d = '';
//     res.on('data', function(chunk){
//         d += chunk;
//     })
//     .on('end', function(){
//        var schf = JSON.parse(d)
//        mongoose.connect('mongodb://wks_dev-mongodb:27017/wkstest')
//        // create API for each schema in schemas JSON
//        schf.forEach(function(s){
//          console.log(s);
//          if(s.properties != ""){
//            var schm = generator.convert(s.properties);
//            schema = new mongoose.Schema(schm);
//            restify.serve(router, mongoose.model(s.title, schema));
//          }
//        });
//        app.use(router);
//        app.listen(3001, () => {
//          console.log('Express server listening on port 3001')
//        });
//     })
//     .on('error', function(e) {
//        console.log("Got error: " + e.message);
//      });
// });
