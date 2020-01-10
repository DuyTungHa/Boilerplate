/* eslint-disable no-console */
/* eslint-disable import/first */

import React from 'react';
import { render } from 'react-dom';
import dotenv from 'dotenv';
import { ApolloProvider } from '@apollo/client';

// Set up environment variables
dotenv.config({ path: 'config/dev.env' });

import client from './apollo';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
