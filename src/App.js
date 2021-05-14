import React from 'react';
import { PrivateRoute } from 'Router';
import Layout from 'Layout';

// Dom
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

// Pages
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
