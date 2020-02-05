import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import './App.css';
import ROUTES from './constants/routes';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        {
          ROUTES.map(route => (
            <Route exact path={route.url} render={props => <route.component {...props} />}/>
          ))
        }
      </Switch>
    </BrowserRouter>
  );
};

export default App;