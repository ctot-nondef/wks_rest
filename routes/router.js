const express = require('express');
const router = express.Router();
const USER = require('../lib/auth.js');
const SCHEMA = require('../lib/schema.js');
const CONFIG =  require('../config.json');

USER.initUser();
SCHEMA.initSchemas();

//POST route for registration, to be shout off for prduction
//TODO: this will not be a public route for now, in order for this to be
// a documented route, we would need to add
// * a check if the username exists
// * a workflow for assigning appropriate rights after signup
// (right now it's full rights)
router.post('/api/v1/register', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    res.status(400).json({'error':'The Passwords don\'t match'});
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }

    USER.User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        res.json(req.session);
        console.log('user', req.body.username, 'created');
      }
    });

  } else {
    res.status(400).json({'error':'Username, Email and Password required.'});
  }
})

//POST route for login
router.post('/api/v1/login', function (req, res, next) {
  if (req.body.username && req.body.password) {
    USER.User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        res.status(401).json({'error':'Wrong Username or Password.'});
      } else {
        req.session.userId = user._id;
        return res.json({"user":req.session.userId,"session": req.sessionID});
      }
    });
  } else {
    res.status(400).json({'error':'Username and Password required.'});
  }
})

//GET route for logout
router.get('/api/v1/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        res.json({'res':'Logout successfull.'})
      }
    });
  }
});

//GET route for API Route/Map
router.get('/api/v1/', function (req, res, next) {
  res.json({
    'data':SCHEMA.names,
    'meta':CONFIG.meta,
    'version':CONFIG.version
  })
});

router.get('/api/v1/jsonschema/:name', function(req, res, next) {
  if (req.params.name) {
    let s = SCHEMA.jsonSchemaByName(req.params.name);
    if (s) {
        res.json(s);
    } else {
        res.status(404).json({'error':`'${req.params.name}' is not known as a Schema`});
    }
  } else {
    res.status(400).json({'error':'Schema name required.'});
  }
});

module.exports = router;