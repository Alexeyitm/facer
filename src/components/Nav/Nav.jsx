import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import Friends from './Friends/Friends';

function Nav({ friends }) {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.link_active : s.link} to='/'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.link_active : s.link} to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.link_active : s.link} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.link_active : s.link} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.link_active : s.link} to='/settings'>Settings</NavLink>
      </div>
      <Friends friends={friends}/>
    </nav>
  );
}

export default Nav;
