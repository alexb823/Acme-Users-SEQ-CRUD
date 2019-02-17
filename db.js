const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const createUser = (firstName, lastName) => {
  return User.create({firstName, lastName})
}

const getListOfUsers = () => {
  return User.findAll();
}

const getUser = id => {
  return User.findOne({where: {id: parseInt(id)}});
}

const initDb = () => {
  return db
    .authenticate()
    .then(() => console.log('Connection to database has been established!'))
    .then(() => db.sync())
    .then(() => console.log('Database has been synced!'))
    .catch(error => console.error(error));
};

module.exports = { initDb, createUser, User, getUser };
