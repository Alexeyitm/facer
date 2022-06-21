import React from 'react';
import s from './Header.module.css';
import logo from '../../image/header/logo.png';

function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Лого"/>
    </header>
  );
}

export default Header;
