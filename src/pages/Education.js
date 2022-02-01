import React from 'react';
import { Badge } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import educations from '../data/educations.json';


function Education() {
  return (
    <div className="education box-outer">
      <Navigation />

      <h1 className="page-header"> Education </h1>

      <div className="timeline-header">
        <span className="box icon-box">
          <i className="icon bi bi-book-fill" />
        </span>
      </div>

      <div className="timeline">
        {educations.map((education, i) =>
          <div className="timeline-item" key={i}>
            <div className="d-flex justify-content-between">
              <h6> {education.course} </h6>
              <p> {education.start} - {education.end} </p>
            </div>

            <p className="location"> {education.institute}, {education.location} </p>
            <p> {education.description} </p>

            {education.bullets.length > 0 &&
              <ul className={(Math.max(...education.bullets.map(x => x.length)) < 50) ? "two-columns" : ""}>
                {education.bullets.map((bullet, j) =>
                  <li key={j}> {bullet} </li>
                )}
              </ul>
            }

            <div className="group-badges">
              {education.technologies.map((technology, k) =>
                <Badge key={k} className="box"> {technology} </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
