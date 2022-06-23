import React from 'react';
import s from './Users.module.css';
import User from './User/User'

function Users({ users }) {

  const usersElements = users.map(user => <User name={user.name} id={user.id} key={user.id}/>)

  return (
    <ul className={s.users}>
      { usersElements }
    </ul>
  );
}

export default Users;
