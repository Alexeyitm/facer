import React from 'react';
import s from './Users.module.css';
import User from './User/User'

function Users() {
  return (
    <ul className={s.users}>
      <User name="Petya"/>
      <User name="Ivan"/>
      <User name="Kolya"/>
      <User name="Dima"/>
      <User name="Olya"/>
      <User name="Artem"/>
      <User name="Petya"/>
      <User name="Ivan"/>
      <User name="Kolya"/>
      <User name="Dima"/>
      <User name="Olya"/>
      <User name="Artem"/>
    </ul>
  );
}

export default Users;
