const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mainLayout = require('./views/mainLayout');
const usersList = require('./views/usersList');
const createUserForm = require('./views/createUserForm');
const updateUserForm = require('./views/updateUserForm');
const { User, getUser } = require('./db');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.redirect('/users');
});

app.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(mainLayout(usersList(users), createUserForm())))
    .catch(next);
});

app.get('/users/:id', (req, res, next) => {
  let aUser;
  getUser(req.params.id)
    .then(user => {
      if (!user) res.sendStatus(404);
      else aUser = user;
    })
    .then(() => User.findAll())
    .then(users => res.send(mainLayout(usersList(users), updateUserForm(aUser)))
    );
});

app.post('/users', (req, res, next) => {
  User.create({ firstName: req.body.firstName, lastName: req.body.lastName })
    .then(() => res.redirect('/users'))
    .catch(next);
});

module.exports = app;
