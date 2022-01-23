import React from 'react';
import { Badge } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import experiences from '../data/experiences.json';


function Work() {
  return (
    <div className="work box-outer">
      <Navigation />

      <h1 className="page-header"> Work Experience </h1>

      <div className="timeline-header">
        <span className="box icon-box">
          <i className="icon bi bi-briefcase-fill" />
        </span>
      </div>

      <div className="timeline">
        {experiences.map((experience, i) =>
          <div className="timeline-item" key={i}>
            <div className="d-flex justify-content-between">
              <h6> {experience.role} </h6>
              <p> {experience.start} - {experience.end} </p>
            </div>

            <p className="location"> {experience.company}, {experience.location} </p>
            <p> {experience.description} </p>

            {experience.bullets.length > 0 &&
              <ul className={(Math.max(...experience.bullets.map(x => x.length)) < 50) ? "two-columns" : ""}>
                {experience.bullets.map((bullet, j) =>
                  <li key={j}> {bullet} </li>
                )}
              </ul>
            }

            {experience.technologies.map((technology, k) =>
              <Badge key={k} className="box"> {technology} </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
