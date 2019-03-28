const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const http = require('https');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');

// loading config
const CONFIG =  require('./config.json');

const ROUTER = require('./routes/router.js');


// loading internal libs
const SCHEMA = require('./lib/schema.js');
const AUTH = require('./lib/auth.js');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
app.use(cors({
  credentials: true,
  origin: ["http://localhost:8080","https://vchc.univie.ac.at"],
  exposedHeaders: ["X-Total-Count"]
}));
app.use(fileUpload());

// init mongodb
mongoose.connect(`mongodb://${CONFIG.db.user}:${CONFIG.db.pass}@${CONFIG.db.server}/${CONFIG.db.db}?authSource=test`, function(error) {
  console.log(error);
});
var db = mongoose.connection;

//use sessions for tracking logins
app.use(session({
  key: 'userid',
  secret: CONFIG.auth.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 604800000,
      httpOnly: false,
  },
  store: new MongoStore({
    mongooseConnection: db
  })
}));

//clear cookies whose sessionid has disappeared
app.use((req, res, next) => {
    if (req.cookies.userid && !req.session.user) {
        res.clearCookie('userid');
    }
    next();
});

// create API for each schema in schema Folder
for (i = 0; i < SCHEMA.schemas.length; i ++) {
  if(SCHEMA.names[i] && !/_.*/.test(SCHEMA.names[i])) {
      restify.serve(ROUTER, SCHEMA.models[i], {
      preCreate: AUTH.chkSession,
      preUpdate: AUTH.chkSession,
      preDelete: AUTH.chkSession,
      totalCountHeader: true,
    });
  }
};

app.use(express.static('asset'));


// serve and listen
app.use(ROUTER);
app.listen(3001, () => {
  console.log('Express server listening on port 3001')
});
