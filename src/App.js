import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import '@fontsource/poppins';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SideBar from './components/SideBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {
  return (
    <HashRouter>
      <Container className="gutter-top gutter-bottom">
        <Row>
          <Col md={12} xl={3}>
            <div className="sticky-md-top">
              <SideBar />
            </div>
          </Col>

          <Col md={12} xl={9}>
            <Switch>
              <Route exact path="/" component={About}></Route>
              <Route exact path="/resume" component={Resume}></Route>
              <Route exact path="/skills" component={Skills}></Route>
              <Route exact path="/portfolio" component={Portfolio}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
