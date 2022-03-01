import React from 'react';

import './PortfolioDetail.scss';
import projects from '../data/projects.json';
import Navigation from '../components/Navigation';


function PortfolioDetail({ match }) {
  const path = match.params.id;
  const projectName = path.replace(/-/g, ' ');

  const project = projects.filter(project => project.name.toLowerCase() === projectName)[0];

  return (
    <div className="box-outer">
      <Navigation />

      <h1 className="page-header"> Portfolio </h1>

      <h4> {project.name} </h4>

      <p> {project.start} </p>
      <p> {project.end} </p>
      <p> {project.description} </p>
      <p> {project.technologies} </p>
      <p> {project.images} </p>
    </div>
  );
}

export default PortfolioDetail;
