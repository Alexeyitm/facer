import React from 'react';
import s from './Users.module.css';
import User from './User/User'

function Users() {
  return (
    <ul className={s.users}>
      <User name="Petya" id="1"/>
      <User name="Ivan" id="2"/>
      <User name="Kolya" id="3"/>
      <User name="Dima" id="4"/>
      <User name="Olya" id="5"/>
      <User name="Artem" id="6"/>
      <User name="Petya" id="7"/>
      <User name="Ivan" id="8"/>
      <User name="Kolya" id="9"/>
      <User name="Dima" id="10"/>
      <User name="Olya" id="11"/>
      <User name="Artem" id="12"/>
    </ul>
  );
}

export default Users;
