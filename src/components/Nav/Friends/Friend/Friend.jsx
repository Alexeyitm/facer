import React from 'react';
import s from './Friend.module.css';

function Friend({ avatar, name }) {
  return (
    <li className={s.friend}>
      <img className={s.avatar} src={avatar} alt={name}/>
      <h3 className={s.name}>{name}</h3>
    </li>
  );
}

export default Friend;
