const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./schema.graphql.js');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

require('./db/mongoose');

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
};

// Setup express server and apply middlewares
const app = express();
app.use(cors(corsOptions));

const resolvers = {
  Mutation,
  Query
};

// Setup apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: false,
  context: ({ req, res }) => ({ req, res }),
  tracing: true
});
server.applyMiddleware({ app, path: '/', cors: false });

module.exports = { app, server };
