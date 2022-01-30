import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navigation.scss';

const Navigation = () => {
  const [hideNav, setHideNav] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <div className={`navigation ${hideNav ? 'navigation--hide' : ''}`}>
      <NavLink exact to="/" className="navigation__logo">
        <img
          className="navigation__image"
          src={logo}
          alt="top-5-leagues"
          width="160"
          height="90"
        />
      </NavLink>
      <nav className="navigation__list">
        <NavLink exact to="/PremierLeague" className="navigation__list-item">
          Premier League
        </NavLink>
        <NavLink exact to="/PrimeraDivision" className="navigation__list-item">
          Primera Division
        </NavLink>
        <NavLink exact to="/Bundesliga" className="navigation__list-item">
          Bundesliga
        </NavLink>
        <NavLink exact to="/SerieA" className="navigation__list-item">
          Serie A
        </NavLink>
        <NavLink
          exact
          to="/Ligue1"
          className="navigation__list-item navigation__ligue1"
        >
          Ligue 1
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
