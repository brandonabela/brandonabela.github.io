import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';

import './Skills.scss';
import skills from '../data/skills.json';

import Navigation from '../components/Navigation';


function Skills() {
  return (
    <div className="skills box-outer">
      <Navigation />

      <h1 className="page-header"> Skills </h1>

      <Row data-masonry='{"percentPosition": true }'>
        {skills.map((skill, i) =>
          <Col md={12} lg={6} key={i}>
            <div className="box box-inner">
              <div className="case-details">
                <h3>
                  <i className={"icon bi bi-" + skill.icon} />
                  {skill.title}
                </h3>

                <div className="group-badges">
                  {[...skill.languages, ...skill.tools].map((technology, k) =>
                    <Badge key={k} className="box"> {technology} </Badge>
                  )}
                </div>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Skills;
