const mongoose = require('mongoose');

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node-auth-test');
  });

  beforeEach(async () => {
    await Promise.all(Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany()));
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
