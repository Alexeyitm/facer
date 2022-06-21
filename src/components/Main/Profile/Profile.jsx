import React from 'react';
import s from './Profile.module.css';
import Cover from './Cover/Cover';

function Profile() {
  return (
    <div className={s.profile}>
      <Cover />
    </div>
  );
}

export default Profile;
