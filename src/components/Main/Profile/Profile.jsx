import React from 'react';
import s from './Profile.module.css';
import Cover from './Cover/Cover';
import Consumer from './Consumer/Consumer';
import Posts from './Posts/Posts';

function Profile({ posts }) {
  return (
    <div className={s.profile}>
      <Cover />
      <Consumer />
      <Posts posts={posts}/>
    </div>
  );
}

export default Profile;
