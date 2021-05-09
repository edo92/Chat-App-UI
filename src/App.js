import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { PrivateRoute } from 'Router';
import Layout from 'Layout';

import Home from 'Pages/Dashboard';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          path={'/'}
          component={Home}
        />
      </Switch>
    </Layout>
  </Router>
);

export default App;
