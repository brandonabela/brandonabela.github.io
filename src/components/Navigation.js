import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.scss';


function Navigation() {
  const links = [
    { path: "/", text: "About" },
    { path: "/education", text: "Education" },
    { path: "/work", text: "Work" },
    { path: "/skills", text: "Skills" },
    { path: "/portfolio", text: "Portfolio" },
    { path: "/contact", text: "Contact" },
  ];

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="navigation box-outer">
      <ul>
        {links.map((link, i) =>
          <li
            key={i}
            className={splitLocation[1] === link.path.substr(1) ? "active" : ""}
          >
            <Link to={link.path}> {link.text} </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
