const { User } = require('../models');

const userData = [
  {
    username: 'Jflex',
    password: 'Jflex',
  },
  {
    username: 'DanTheMan',
    password: 'Dandan',
  },
  {
    username: 'BeanDip',
    password: 'Bean',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
