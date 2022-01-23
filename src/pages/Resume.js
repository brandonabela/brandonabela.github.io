import React from 'react';
import { Badge } from 'react-bootstrap';

import './Resume.scss';
import Navigation from '../components/Navigation';
import educations from '../data/educations.json';
import experiences from '../data/experiences.json';


function Resume() {
  return (
    <div className="resume box-outer">
      <Navigation />

      <h1 className="page-header"> Resume </h1>

      <div className="timeline-header">
        <span className="box icon-box">
          <i className="icon bi bi-briefcase-fill" />
        </span>

        <h2> Experience </h2>
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

      <div className="timeline-header">
        <span className="box icon-box">
          <i className="icon bi bi-book-fill" />
        </span>

        <h2> Education </h2>
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

            {education.technologies.map((technology, k) =>
              <Badge key={k} className="box"> {technology} </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
