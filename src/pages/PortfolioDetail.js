import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './PortfolioDetail.scss';
import UtilText from '../utils/UtilText';
import UtilProject from '../utils/UtilProject';

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import Carousel from '../components/Carousel';
import Navigation from '../components/Navigation';

import projects from '../data/projects.json';


function PortfolioDetail({ match }) {
  const path = match.params.id;
  const projectName = path.replace(/-/g, ' ');

  let project = projects.filter(project => project.name.toLowerCase() === projectName)[0];
  UtilProject.addSkillGroup(project);

  project['imagePaths'] = Array.from({ length: project.images }).map((_, i) =>
    "./images/Projects/" + UtilText.snakeCase(project.name) + String(i + 1).padStart(2, '0') + ".jpg"
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  Carousel('.carousel');

  return (
    <div className="box-outer">
      <Navigation />

      <h1 className="page-header"> Portfolio </h1>

      <Link className="backLink" to="/portfolio">
        <i className="bi bi-arrow-left-short"></i> Back Portfolio
      </Link>

      <header className="project-header">
        <h1> {project.name} </h1>

        <div className="project-image-wrapper">
          <Image
            src={project.imagePaths[0]}
            alt={project.name.toLowerCase().replaceAll(' ', '_')}
          />
        </div>
      </header>

      <Row>
        <Col md={4} sm={12}>
          <div className="icon-group">
            <span className="box icon-box">
              <i className="icon bi bi-calendar-range"></i>
            </span>

            <div className="icon-text">
              <span className="overhead"> Timeline </span>
              <p> {project.start} - {project.end} </p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12}>
          <div className="icon-group">
            <span className="box icon-box">
              <i className="icon bi bi-tags-fill"></i>
            </span>

            <div className="icon-text">
              <span className="overhead"> Category </span>
              <p className='text-overlap'> {project.skillGroup.join(', ')} </p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12}>
          <div className="icon-group">
            <span className="box icon-box">
              <i className="icon bi bi-translate"></i>
            </span>

            <div className="icon-text">
              <span className="overhead"> Technologies </span>
              <p className='text-overlap'> {project.technologies.slice(-3).join(', ')} </p>
            </div>
          </div>
        </Col>
      </Row>

      {project.description.map((paragraph, i) =>
        <p key={i}> {paragraph} </p>
      )}

      <div className="carousel">
        {project.imagePaths.map((image, i) =>
          <Image
            rounded key={i} src={image}
            onClick={() => { setModalOpen(true); setModalIndex(i) }}
            alt={project.name.toLowerCase().replaceAll(' ', '_')}
          />
        )}

        {modalOpen && (
          <Lightbox
            mainSrc={project.imagePaths[modalIndex]}
            nextSrc={project.imagePaths[(modalIndex + 1) % project.images]}
            prevSrc={project.imagePaths[(modalIndex + project.images - 1) % project.images]}
            onCloseRequest={() => setModalOpen(false)}
            onMovePrevRequest={() => setModalIndex((modalIndex + project.images - 1) % project.images) }
            onMoveNextRequest={() => setModalIndex((modalIndex + 1) % project.images) }
          />
        )}
      </div>
    </div>
  );
}

export default PortfolioDetail;
