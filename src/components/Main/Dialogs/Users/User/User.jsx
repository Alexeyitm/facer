import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

function User({ name, id }) {
  const path = '/dialogs/' + id;

  return (
    <li className={s.user}><NavLink className={s.link} to={path}>{name}</NavLink></li>
  );
}

export default User;
