import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './contents/Home';
import SignIn from './contents/SignIn';

function App() {
  return (
    <Router>
    <Fragment>
      <Route path='/' component={Home} />
        <Switch>
          <Route path="/login" component={SignIn} />
        </Switch>
    </Fragment>
  </Router>
  );
}

export default App;
