const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();
const fs = require('fs');
const http = require('https');
const generator = require('mongoose-gen');


const CONFIG =  require('./config.json');




app.use(bodyParser.json());
app.use(methodOverride());

var me = [];
var schf = JSON.parse(fs.readFileSync('schemas.json', 'utf8'));
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`)
// create API for each schema in schemas JSON
schf.forEach(function(s){
  //console.log(s);
  if(s.properties != ""){
    var schm = generator.convert(s.properties);
    schema = new mongoose.Schema(schm);
    me.push(schema);
    restify.serve(router, mongoose.model(s.title, schema));
  }
});
fs.writeFile('mongoose.json', JSON.stringify(me,null,2));

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
