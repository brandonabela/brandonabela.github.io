import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

import { createBrowserHistory } from "history";
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import '@fontsource/poppins';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SideBar from './components/SideBar';
import About from './pages/About';
import Education from './pages/Education';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollUp from './components/ScrollUp';
import Footer from './components/Footer';


function App() {
  ReactGA.initialize("UA-58651161-1");

  // Initial Page Hit
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.hash });
  });

  // User Navigation
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.hash });
  });

  return (
    <HashRouter>
      <Container fluid="xxl" className="gutter-top gutter-bottom">
        <Row>
          <Col md={12} xl={3}>
            <SideBar />
          </Col>

          <Col md={12} xl={9}>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/portfolio/:id" component={PortfolioDetail} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>

            <ScrollUp />

            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
