const { User } = require('../models')


const userData = [
  {
    "user_name": "test123",
    "password": "password123"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;


