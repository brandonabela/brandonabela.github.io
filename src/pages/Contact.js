import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import './Contact.scss';
import profile from '../data/profile.json';
import Navigation from '../components/Navigation';


function Contact() {
  return (
    <div className="box-outer">
      <Navigation />

      <h1 className="page-header"> Contact </h1>

      <h2> Contact Form </h2>

      <form action={"https://formspree.io/f/" + profile.formspreeId} method="POST">
        <Row>
          <Col sm={6}>
            <Form.Control className="mb-3" type="text" name="name" placeholder="Full Name" required />
          </Col>

          <Col sm={6}>
            <Form.Control className="mb-3" type="text" name="subject" placeholder="Subject" required />
          </Col>

          <Col sm={12}>
            <Form.Control className="mb-3" type="email" name="email" placeholder="Email Address" required />
          </Col>

          <Col sm={12}>
            <Form.Control className="mb-3" as="textarea" name="message" placeholder="Your message" rows={3} required />
          </Col>
        </Row>

        <div className="d-flex flex-row-reverse">
          <Button className="box" type="submit"> <i className="bi bi-send-fill"></i> Send Message </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
