import React from 'react';
import s from './Users.module.css';
import User from './User/User'

function Users() {

  const users = [
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Kolya'},
    {id: 4, name: 'Dima'},
    {id: 5, name: 'Olya'},
    {id: 6, name: 'Artem'},
    {id: 7, name: 'Petya'},
    {id: 8, name: 'Ivan'},
    {id: 9, name: 'Kolya'},
    {id: 10, name: 'Dima'},
    {id: 11, name: 'Olya'},
    {id: 12, name: 'Artem'},
  ]

  return (
    <ul className={s.users}>
      {users.map(user => <User name={user.name} id={user.id} key={user.id}/>)}
    </ul>
  );
}

export default Users;
