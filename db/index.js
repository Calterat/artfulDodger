const sequelize = require('../config/connection');

const seedDodgers = require('./seed-dodgers');


const seed = async () => {
  console.log("Let's load in the test dodgers...");
  await sequelize.sync({ force: true });
  await seedDodgers();
  process.exit(0);
}

seed();