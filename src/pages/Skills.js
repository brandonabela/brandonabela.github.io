import React from 'react';
import { Badge } from 'react-bootstrap';

import './Skills.scss';
import skills from '../data/skills.json';

import Masonry from 'react-masonry-css'
import Navigation from '../components/Navigation';


function Skills() {
  const breakpoint = {
    default: 2,
    768: 2
  };

  return (
    <div className="skills box-outer">
      <Navigation />

      <h1 className="page-header"> Skills </h1>

      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {skills.map((skill, i) =>
          <div className="box box-inner" key={i}>
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
        )}
      </Masonry>
    </div>
  );
}

export default Skills;
