import React from 'react';

import './Footer.scss';


function Footer() {
  return (
    <footer className="text-center">
      <p> © {new Date().getFullYear()} - Developed by <a href="https://github.com/brandonabela">Brandon Abela</a>. All rights reserved. </p>
    </footer>
  );
}

export default Footer;
