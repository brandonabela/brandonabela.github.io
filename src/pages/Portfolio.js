import React, { useState } from 'react';
import { Button, Col, Dropdown, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Portfolio.scss';
import UtilText from '../utils/UtilText';
import UtilProject from '../utils/UtilProject';

import skills from '../data/skills.json';
import projects from '../data/projects.json';
import Navigation from '../components/Navigation';


function Portfolio() {
  const [filter, setFilter] = useState('All');

  projects.forEach(project => UtilProject.addSkillGroup(project));

  const projectSkills = [...new Set(projects.map(project => project.skillGroup).flat())];
  const pageFilters = skills.filter(x => projectSkills.indexOf(x.title) > 0).map(skill => skill.title);

  return (
    <div className="box-outer">
      <Navigation />

      <h1 className="page-header"> Portfolio </h1>

      <Dropdown className="filter-dropdown">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          {filter}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {['All', ...pageFilters].map((s_filter, index) =>
            <Dropdown.Item key={index} onClick={() => setFilter(s_filter)}>
              {s_filter}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <ul className="filter-list">
        {['All', ...pageFilters].map((s_filter, index) =>
          <li key={index}>
            <Button
              className={"filter-item " + (filter === s_filter ? "active" : "")}
              onClick={() => setFilter(s_filter)}
            >
              {s_filter}
            </Button>
          </li>
        )}
      </ul>

      <Row>
        {[filter === "All" ? projects : projects.filter(p =>
          p.skillGroup.includes(filter))
        ]
        .flat()
        .sort((a, b) => Date.parse(Date.parse(new Date(b.end)) - new Date(a.end)))
        .map((project, p_index) =>

          <Col lg={4} md={6} sm={12} key={p_index}>
            <Link to={"/portfolio/" + project.name.toLowerCase().replace(/\s+/g, '-')}>

              <div className="gallery">
                <div className="gallery-image">
                  <Image
                    alt={project.name.toLowerCase().replaceAll(' ', '_')}
                    src={"./images/Projects/" + UtilText.snakeCase(project.name) + "01.jpg"}
                  />

                  <div className="gallery-overlay">
                    <span className="icon-box">
                      <i className="icon bi bi-eye"></i>
                    </span>
                  </div>
                </div>

                <div className="gallery-caption">
                  <h3> {project.name} </h3>
                  <p> {project.skillGroup.join(', ')} </p>
                </div>
              </div>

            </Link>
          </Col>
        )
        }

      </Row >

    </div >
  );
}

export default Portfolio;
