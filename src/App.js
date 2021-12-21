import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import '@fontsource/poppins';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SideBar from './components/SideBar';
import Navigation from './components/Navigation';
import About from './pages/About';
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
            <Navigation />

            <Switch>
              <Route exact path="/" component={About}></Route>
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
