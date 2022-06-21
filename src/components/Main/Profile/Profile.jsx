import React from 'react';
import s from './Profile.module.css';
import Cover from './Cover/Cover';
import User from './User/User';
import Posts from './Posts/Posts';

function Profile() {
  return (
    <div className={s.profile}>
      <Cover />
      <User />
      <Posts />
    </div>
  );
}

export default Profile;
