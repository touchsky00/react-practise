import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Login from './views/login/login'
import history from './history'


function App() {
  return (
    <div>
      <br />
      <Router history = { history }>
        <Switch>
          <Route path="/login" exact component = {Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
