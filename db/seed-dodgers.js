const { Dodger } = require('../models');

const dodgerData = [
  {
    dodgername: 'testDodger1',
    email: 'testDodger1@email.com',
    password: 'password1',
    games_won: 0,
    games_loss: 2
  },
  {
    dodgername: 'testDodger2',
    email: 'testDodger2@email.com',
    password: 'password2',
    games_won: 2,
    games_loss: 0
  }
]

const seedDodgers = () => Dodger.bulkCreate(dodgerData);

module.exports = seedDodgers;
