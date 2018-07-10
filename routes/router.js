var express = require('express');
var router = express.Router();
var User = require('../lib/auth.js');


User.initUser();

//POST route for registration
router.post('/api/v1/register', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
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

    User.User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        res.send(JSON.stringify(req.session));
      }
    });

  } else {
    var err = new Error('Username, Password and Email required.');
    err.status = 400;
    return next(err);
  }
})

//POST route for login
router.post('/api/v1/login', function (req, res, next) {
  if (req.body.username && req.body.password) {
    User.User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong username or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.send(JSON.stringify({"user":req.session.userId,"session": req.sessionID}));
      }
    });
  } else {
    var err = new Error('Username and Password required.');
    err.status = 400;
    return next(err);
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
        return res.redirect('/');
      }
    });
  }
});

// // GET route after registering
// router.get('/profile', function (req, res, next) {
//   User.findById(req.session.userId)
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           var err = new Error('Not authorized! Go back!');
//           err.status = 400;
//           return next(err);
//         } else {
//           return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
//         }
//       }
//     });
// });



module.exports = router;
