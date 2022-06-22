import React from 'react';
import s from './Header.module.css';
import logo from '../../image/logo/logo.png';

function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt='Logo'/>
    </header>
  );
}

export default Header;
