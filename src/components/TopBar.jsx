import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

function TopBar() {
  return (
    <div className="top-bar">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span className="title">Tanjir Easy to Cook Recipes</span>
    </div>
  );
}

export default TopBar;
