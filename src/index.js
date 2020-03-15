/* eslint-disable no-console */
/* eslint-disable import/first */

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './apollo/apollo';

import App from './components/App';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
