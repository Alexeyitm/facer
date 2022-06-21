import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={s.link} to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/messages">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
