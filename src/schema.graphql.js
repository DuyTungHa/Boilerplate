const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mutation {
    hi: String!
  }

  type Query {
    hi: String!
  }
`;

module.exports = typeDefs;
