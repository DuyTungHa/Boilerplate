/* eslint-disable no-console */

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
require('./db/mongoose');
const typeDefs = require('./schema.graphql.js');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const app = express();
app.use(cors());

const start = () => {
  try {
    const resolvers = {
      Mutation,
      Query
    };
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    app.listen(process.env.PORT, () => {
      console.log(
        `Visit http://localhost:${process.env.PORT}${server.graphqlPath}`
      );
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = start;
