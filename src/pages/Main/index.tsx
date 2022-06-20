/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-bind */
import { useContext, useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
// style
import {
  Container,
} from './style';

export default function Main() {
  const history = useHistory();

  function handleRegisterPress() {
    history.push('/register');
  }

  function handleDetailsDocument(id: string) {
    history.push(`/documentos/${id}`);
  }

  function LoginScreen(routeProps: any) {
    return (
      <Login
        {...routeProps}
        onRegisterPress={() => handleRegisterPress()}
      />
    );
  }

  function RegisterScreen(routeProps: any) {
    return (
      <Register {...routeProps} />
    );
  }

  return (
    <Container>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Switch>
    </Container>
  );
}
