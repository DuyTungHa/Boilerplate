/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */

const setUpServer = () => {
  require('dotenv').config({ path: 'config/test.env' });

  const express = require('express');
  const { ApolloServer } = require('apollo-server-express');

  const typeDefs = require('../../src/schema.graphql');
  const Mutation = require('../../src/resolvers/Mutation');
  const Query = require('../../src/resolvers/Query');

  require('../../src/db/mongoose');

  const { userOne } = require('./db');

  const app = express();

  const resolvers = {
    Mutation,
    Query,
    Document
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: false,
    context: ({ res }) => ({
      req: {
        user: {
          ...userOne,
          id: userOne._id.toString()
        }
      },
      res
    }),
    tracing: true
  });
  server.applyMiddleware({ app, path: '/', cors: false });

  return { server };
};

module.exports = setUpServer;
