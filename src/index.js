import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Home from './Home';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Home />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
