import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to='/'>Bruna Nogueira</Link>
    <button 
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/About'>About</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Experience'>Work Experience</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Research'>Research grants</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Publications'>Publications</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Presentations'>Presentations & lectures</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Professional'>Professional development</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/CV'>CV & IELTS</Link >
        </li>
      </ul>
    </div>
  </nav>
  );
};


export default Header;