import React from 'react';
import s from './Users.module.css';

function Users() {
  return (
    <ul className={s.users}>
      <User />
    </ul>
  );
}

export default Users;
