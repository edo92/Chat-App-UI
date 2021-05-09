import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

// Test Only **
const auth = true; // needs to be in context
// ************

export const PrivateRoute = (props) => {
  const Component = props.component;

  if (!auth) return <Redirect to="/login" />;

  return (
    <Route exact={props.exact} path={props.path}>
      <Component />
    </Route>
  );
};

export const ProtectedRoute = (props) => {
  const Component = props.component;
  if (auth) return <Redirect to="/" />;

  return (
    <Route exact={props.exact} path={props.path}>
      <Component />
    </Route>
  );
};
