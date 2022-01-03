const mongoose = require('mongoose');
const { toJSON } = require('../../../../src/models/plugins');

describe('toJSON plugin', () => {
  let connection;

  beforeEach(() => {
    connection = mongoose.createConnection();
  });

  it('Should replace _id with id', () => {
    const schema = mongoose.Schema();
    schema.plugin(toJSON);
    const Model = connection.model('Model', schema);
    const doc = new Model();
    expect(doc.toJSON()).not.toHaveProperty('_id');
    expect(doc.toJSON()).toHaveProperty('id', doc._id.toString());
  });
});
