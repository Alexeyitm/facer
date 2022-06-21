import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__link">Профиль</div>
      <div className="Nav__link">Сообщения</div>
      <div className="Nav__link">Новости</div>
      <div className="Nav__link">Музыка</div>
      <div className="Nav__link">Настройки</div>
    </nav>
  );
}

export default Nav;
