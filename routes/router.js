var express = require('express');
var router = express.Router();
var USER = require('../lib/auth.js');
var SCHEMA = require('../lib/schema.js');


USER.initUser();
SCHEMA.initSchemas();

//POST route for registration
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
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    USER.User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        res.JSON(req.session);
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
        return res.send(JSON.stringify({"user":req.session.userId,"session": req.sessionID}));
      }
    });
  } else {
    res.status(400).json({'error':'Username and Password required.'});
  }
})

// POST route for logout
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
