import React from 'react';
import {NavLink}  from 'react-router-dom';
import logo from './images/logo.png';

const Navigation = () => (
  <div className='navigation'>
    <NavLink exact to='/' className='navigation__logo' ><img className='navigation__image' src={logo} alt="top-5-leagues"/></NavLink>
    <nav className='navigation__list'>
      <NavLink exact to='/PremierLeague' className='navigation__list-item' >Premier League</NavLink>
      <NavLink exact to='/PrimeraDivision' className='navigation__list-item' >Primera Division</NavLink>
      <NavLink exact to='/Bundesliga' className='navigation__list-item' >Bundesliga</NavLink>
      <NavLink exact to='/SerieA' className='navigation__list-item'>Serie A</NavLink>
      <NavLink exact to='/Ligue1' className='navigation__list-item'>Ligue 1</NavLink>
    </nav>
  </div>
);

export default Navigation; 