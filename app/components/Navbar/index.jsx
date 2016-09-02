import React from 'react';
import { Link } from 'react-router';
import { leagueName } from '../../config/appConfig';

function Navbar() {
  return (
    <nav className="green">
      <div className="nav-wrapper container">
        <ul className="left hide-on-med-and-down">
          <li><Link to="/game">Add game</Link></li>
          <li><Link to="/ranking">Ranking</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/leagues">Leagues</Link></li>
        </ul>
        <ul className="side-nav" id="slide-out">
          <li><Link to="/game">Add game</Link></li>
          <li><Link to="/ranking">Ranking</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/leagues">Leagues</Link></li>
        </ul>
        <span
          href=""
          data-activates="slide-out"
          className="button-collapse"
        >
          <i className="mdi-navigation-menu" />
        </span>
        <a href="/" className="brand-logo right">{leagueName}</a>
      </div>
    </nav>
  );
}

export default Navbar;
