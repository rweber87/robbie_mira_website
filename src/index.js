import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

const aws = require('aws-sdk');
const API_URL = new aws.S3({
  api: process.env.api
});

const client = new ApolloClient({ uri: `${process.env.API_URL}/graphql` });
console.log('API_URL', process.env);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App client={client} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
