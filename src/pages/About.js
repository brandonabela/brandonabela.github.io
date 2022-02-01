import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import './About.scss';
import about from '../data/about.json';
import Carousel from '../components/Carousel';
import Navigation from '../components/Navigation';


function About() {
  const employers_path = Array.from({ length: about.employers }, (_, i) => {
    return "./images/Employers/Employer_" + String(i + 1).padStart(3, '0') + ".jpg"
  }).reverse();

  Carousel('.carousel');

  return (
    <div className="about box-outer">
      <Navigation />

      <h1 className="page-header"> About Me </h1>

      {about.heading.map((paragraph, i) =>
        <p key={i}> {paragraph} </p>
      )}

      <h2 className="page-subheader"> What I Do </h2>

      <Row>
        {about.types.map((type, i) =>
          <Col md={12} lg={6} key={i}>
            <div className="case-item box box-inner">
              <i className={"icon bi bi-" + type.icon} />

              <div className="case-details">
                <h3> {type.name} </h3>
                <p> {type.description} </p>
              </div>
            </div>
          </Col>
        )}
      </Row>

      <h2 className="page-subheader"> Employers </h2>

      <div className="carousel">
        {employers_path.map((employer_path, i) =>
          <Image rounded src={employer_path} alt={"Slide_" + i} key={i} />
        )}
      </div>
    </div>
  );
}

export default About;
