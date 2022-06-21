import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.nav__link}>Профиль</div>
      <div className={s.nav__link}>Сообщения</div>
      <div className={s.nav__link}>Новости</div>
      <div className={s.nav__link}>Музыка</div>
      <div className={s.nav__link}>Настройки</div>
    </nav>
  );
}

export default Nav;
