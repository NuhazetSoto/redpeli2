import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h2>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Redpeli
        </Link>
      </h2>
      <Link to="/login">
        <button className="button">Login</button>
      </Link>
    </div>
  );
}

export default Header