import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

const client = new ApolloClient({
  // uri: process.env.REACT_APP_BACKEND_URL
  uri: process.env.REACT_APP_TODOS_API,
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {
      toggleTodo: (_root, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'TodoItem', id: variables.id });
        const fragment = gql`
          fragment completeTodo on TodoItem {
            completed
          }
        `;
        const todo = cache.readFragment({ fragment, id });
        const data = { ...todo, completed: !todo.completed };
        cache.writeData({ id, data });
        return null;
      }
    }
  }
});

export default client;
