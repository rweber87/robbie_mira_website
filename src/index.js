import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

const client = new ApolloClient({
  uri: `https://peaceful-bastion-92264.herokuapp.com/graphql`
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App client={client} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
