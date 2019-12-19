/* eslint-disable no-undef */

require('dotenv').config({ path: 'config/test.env' });

const { createTestClient } = require('apollo-server-testing');
const { gql } = require('apollo-server-express');
const User = require('../src/models/user');

const { server } = require('../src/app');

beforeEach(async () => {
  await User.deleteMany();
});

const { query, mutate } = createTestClient(server);

describe('Mutations', () => {
  it('Testing 1', () => {
    expect('Testing').toBe('Testing');
  });
});
