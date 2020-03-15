import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // uri: process.env.REACT_APP_BACKEND_URL
  uri: process.env.REACT_APP_TODOS_API
});

export default client;
