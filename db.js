const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
});

const createUser = (firstName, lastName) => {
  return User.create({ firstName, lastName })
};

const getUser = id => {
  return User.findOne({ where: { id: parseInt(id) } });
};

const initDb = () => {
  return db
    .authenticate()
    .then(() => console.log('Connection to database has been established!'))
    .then(() => db.sync())
    .then(() => console.log('Database has been synced!'))
    .catch(error => console.error(error));
};

module.exports = { initDb, User, createUser, getUser };
