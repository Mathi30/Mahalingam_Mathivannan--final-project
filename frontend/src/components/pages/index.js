import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Listing from './Listing';
import CreateUser from './createUser'
import PrivateRoute from '../shared/PrivateRoute';
import Login from './Login';

// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return <Router>
     <Navbar />
      <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route path="/resume">
      <Resume />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
     <Route  path="/login">
      <Login />
      </Route>
       <Route path="/createuser">
        <CreateUser />
     </Route>
     <PrivateRoute path="/signin">
        <Listing />
    </PrivateRoute>
    
   </Switch>
  </Router>
  
};

export default ReactRouterSetup;

//     <PrivateRoute path="/submissionslogin">