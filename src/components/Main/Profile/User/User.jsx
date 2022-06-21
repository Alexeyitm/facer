import React from 'react';
import s from './User.module.css';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';

function User() {
  return (
    <div className={s.user}>
      <Avatar />
      <Info />
    </div>
  );
}

export default User;
