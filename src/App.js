import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/index'
import About from './pages/about'
import Services from './pages/services'
import Signup from './pages/signup'
import Contact from './pages/contact'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/service' exact component={Services} />
        <Route path='/contact-us' exact component={Contact} />
        <Route path='/sign-up' exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
