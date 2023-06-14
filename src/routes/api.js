import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Signup from './Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        {/* Defina outras rotas aqui, se necessário */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
