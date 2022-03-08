import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import Navigation from '../components/Navigation';


function NotFound() {
  return (
    <div className="not-found box-outer">
      <Navigation />

      <h1 className="page-header"> Not Found </h1>

      <div className="text-center">
        <h1 className="text-404"> 404 </h1>

        <p className="text-desc"> Oops, Something Went Wrong </p>

        <Button className="box" as={Link} to="/"> <i className="bi bi-house-fill"></i> Back to Home </Button>
      </div>


    </div>
  );
}

export default NotFound;
