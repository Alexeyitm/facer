import React from 'react';
import s from './Users.module.css';
import User from './User/User'

function Users({ users }) {

  return (
    <ul className={s.users}>
      {users.map(user => <User name={user.name} id={user.id} key={user.id}/>)}
    </ul>
  );
}

export default Users;
