import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.link}>Profile</div>
      <div className={s.link}>Messages</div>
      <div className={s.link}>News</div>
      <div className={s.link}>Music</div>
      <div className={s.link}>Settings</div>
    </nav>
  );
}

export default Nav;
