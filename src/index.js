/* eslint-disable no-console */
/* eslint-disable import/first */

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import client from './apollo';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
