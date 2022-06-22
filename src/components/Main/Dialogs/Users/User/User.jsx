import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

function User({ name, id }) {
  return (
    <li className={s.user}><NavLink className={s.link} to={id+""}>{name}</NavLink></li>
  );
}

export default User;
