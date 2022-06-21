import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

function User({ name }) {
  return (
    <li className={s.user}><NavLink className={s.link} to="/">{name}</NavLink></li>
  );
}

export default User;
