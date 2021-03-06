const faker = require('faker');

const db = require('../config/connection');
const { Order, User } = require('../models');

db.once('open', async () => {
  await Order.deleteMany({});
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  console.log('all done!');
  process.exit(0);
});
