import React from 'react';
import s from './User.module.css';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';

function User() {
  return (
    <div className={s.user}>
      <Avatar />
      <Info
        name="Alexey Ponomarev" 
        dataOfBirth="19.10.1996" 
        city="Magnitogorsk"
        education="Ural Federal University"
      />
    </div>
  );
}

export default User;
