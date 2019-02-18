const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const createUserPage = require('./views/createUserPage');
const updateUserPage = require('./views/updateUserPage');
const errorPage = require('./views/errorPage');
const { User, getUser } = require('./db');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findAll()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(next);
});

app.get('/', (req, res, next) => {
  res.redirect('/users');
});

app.get('/users', (req, res, next) => {
  res.send(createUserPage(req.users));
});

app.get('/users/:id', (req, res, next) => {
  getUser(req.params.id)
    .then(user => {
      if (!user) res.sendStatus(404);
      else res.send(updateUserPage(user, req.users));
    })
    .catch(next);
});

app.post('/users', (req, res, next) => {
  User.create({ firstName: req.body.firstName, lastName: req.body.lastName })
    .then(() => res.redirect('/users'))
    .catch(validationError => res.send(errorPage(validationError)));
});

app.delete('/users/:id', (req, res, next) => {
  getUser(req.params.id)
    .then(user => user.destroy())
    .then(() => res.redirect('/users'))
    .catch(next);
});

app.put('/users/:id', (req, res, next) => {
  getUser(req.params.id)
    .then(user =>
      user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })
    )
    .then(() => res.redirect('/users'))
    .catch(validationError => res.send(errorPage(validationError)));
});

module.exports = app;
