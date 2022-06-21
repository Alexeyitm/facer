import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.link}>Профиль</div>
      <div className={s.link}>Сообщения</div>
      <div className={s.link}>Новости</div>
      <div className={s.link}>Музыка</div>
      <div className={s.link}>Настройки</div>
    </nav>
  );
}

export default Nav;
