const express = require('express')
var _ = require("lodash");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var cors = require('cors');


var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

const app = express()

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

var users = [
  {
    id: 1,
    name: 'harimohan',
    password: '%2yx4'
  },
  {
    id: 2,
    name: 'test',
    password: 'test'
  }
];

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

app.use(cors());
app.use('/public', express.static('public'))

app.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // usually this would be a database call:
  var user = users[_.findIndex(users, {name: name})];
  if( ! user ){
    res.status(401).json({message:"no such user found"});
  }

  if(user.password === req.body.password) {
   
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
});


app.get('/', function (req, res) {
  res.json({"message":"Welcome node application"})
})

app.get('/notes', function (req, res) {
  res.json([{"id":1,"title":"title here","note":"Welcome node application"},{"id":2,"title":"title here","note":"Welcome node application"},{"id":3,"title":"title here","note":"Welcome node application"},{"id":4,"title":"title here","note":"Welcome node application"}])
})


app.route('/note')
  .get(function (req, res) {
    res.json({"message":"success"})
  })
  .post(function (req, res) {
    res.json({"message":"success"})
  })
  .put(function (req, res) {
    res.json({"message":"success"})
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
