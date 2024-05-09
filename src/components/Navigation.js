// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
