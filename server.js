const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const router = express.Router();
const http = require('https');

// loading config
const CONFIG =  require('./config.json');

// loading internal libs
const SCHEMA = require('./lib/schema.js');
const AUTH = require('./lib/auth.js');

app.use(bodyParser.json());
app.use(methodOverride());

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`)

// create API for each schema in schemas JSON
SCHEMA.fetchSchemas();
for (i = 0; i < SCHEMA.schemas.length; i ++) {
  if(!/adm_.*/.test(SCHEMA.names[i])) {
    restify.serve(router, mongoose.model(SCHEMA.names[i], SCHEMA.schemas[i]));
  }
};

// serve and listen
app.use(router);
app.listen(3001, () => {
  console.log('Express server listening on port 3001')
});
