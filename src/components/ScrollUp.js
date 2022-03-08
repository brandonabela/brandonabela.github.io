import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import './ScrollUp.scss';


function ScrollUp() {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;

    scrolled ? setVisible(true) : setVisible(false);
  }, [false]);

  function scrollUp() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, c - c / 8);
    }
  }

  return (
    <Button className="box scrollUp" onClick={scrollUp} style={{ display: visible ? 'inline' : 'none' }}>
      <i className="icon bi bi-chevron-up"></i>
    </Button>
  );
}

export default ScrollUp;
