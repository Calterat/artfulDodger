const { Dodger } = require('../models');

const dodgerData = [
  {
    username: 'testDodger1',
    email: 'testDodger1@email.com',
    password: 'password1'
  },
  {
    username: 'testDodger2',
    email: 'testDodger2@email.com',
    password: 'password2'
  }
]

const seedDodgers = () => Dodger.bulkCreate(dodgerData);

module.exports = seedDodgers;
