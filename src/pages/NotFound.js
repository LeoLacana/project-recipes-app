import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1> Not Found!</h1>
    <Link to="/">
      Home
    </Link>
  </div>
);

export default NotFound;
