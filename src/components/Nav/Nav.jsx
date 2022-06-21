import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.link}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
