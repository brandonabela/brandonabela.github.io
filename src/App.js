import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navigation from './components/Navigation';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />

        <div className="page">
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
