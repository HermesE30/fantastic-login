/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-bind */
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';

export default function Main() {
  const history = useHistory();

  function handleRegisterPress() {
    history.push('/register');
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login
          onRegisterPress={() => handleRegisterPress()}
        />
      </ Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}
