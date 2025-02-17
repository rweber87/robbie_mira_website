import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

const client = new ApolloClient({
  uri: `https://peaceful-bastion-92264.herokuapp.com/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App client={client} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
