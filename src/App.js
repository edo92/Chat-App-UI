import React from 'react';
import { PrivateRoute, ProtectedRoute } from 'Router';
import Layout from 'Layout';

// Dom
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

// Pages
import Dashboard from 'Pages/Dashboard';
import Login from 'Pages/Auth/Login';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          path={'/'}
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path={'/login'}
          component={Login}
        />
      </Switch>
    </Layout>
  </Router>
);

export default App;
