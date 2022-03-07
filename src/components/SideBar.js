import React, { useLayoutEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';

import './SideBar.scss';
import profile from '../data/profile.json';
import socials from '../data/socials.json';
import experiences from '../data/experiences.json';


function SideBar() {
  const [isShowContacts, setShowContacts] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setShowContacts(window.innerWidth >= 1200);
    }

    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);
  });

  function toggleContacts() {
    setShowContacts(shown => !shown);
  }

  return (
    <div className="sidebar box-outer">
      <div className='sidebar-main'>
        <svg className="avatar" viewBox="0 0 188 188">
          <g className="avatar-box">
            <image xlinkHref="./images/ProfilePicture.png" height="100%" width="100%" />
          </g>
        </svg>

        <svg width="0" height="0">
          <clipPath id="avatar-clip">
            <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z" />
          </clipPath>
        </svg>

        <div className="text-xl-center">
          <h3 className="title"> {profile.name} </h3>

          <Badge pill> {experiences[0].role} </Badge>
        </div>

        <Button className="box btn btn-sidebar d-xl-none" onClick={toggleContacts}>
          {isShowContacts ? 'Hide' : 'Show'} <span className='d-none d-sm-inline'> Contacts </span>
        </Button>
      </div>

      {isShowContacts && (
        <div className="sidebar-additional">
          <div className="separator" />

          <ul className="detail-info">
            <li className="icon-group">
              <span className="box icon-box">
                <i className="icon bi bi-envelope" />
              </span>

              <div className="icon-text">
                <span className="overhead"> Email </span>
                <a className="text-overflow" href={"mailto:" + profile.email} title={profile.email}> {profile.email} </a>
              </div>
            </li>

            <li className="icon-group">
              <span className="box icon-box">
                <i className="icon bi bi-phone" />
              </span>

              <div className="icon-text">
                <span className="overhead"> Phone </span>
                <span className="text-overflow"> {profile.phone} </span>
              </div>
            </li>

            <li className="icon-group">
              <span className="box icon-box">
                <i className="icon bi bi-calendar-event" />
              </span>

              <div className="icon-text">
                <span className="overhead"> Birthday </span>
                <span className="text-overflow"> {profile.birthday} </span>
              </div>
            </li>

            <li className="icon-group">
              <span className="box icon-box">
                <i className="icon bi bi-geo-alt" />
              </span>

              <div className="icon-text">
                <span className="overhead"> Location </span>
                <span className="text-overflow"> {profile.location} </span>
              </div>
            </li>
          </ul>

          <div className="separator d-xl-none" />

          <div className="socials">
            {socials.map((social, s_index) =>
              <a key={s_index} href={social.link}>
                <i className={"bi bi-" + social.name} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
