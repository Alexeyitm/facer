import React from 'react';
import s from './Profile.module.css';
import Cover from './Cover/Cover';
import Owner from './Owner/Owner';
import Posts from './Posts/Posts';

function Profile({ owner, posts }) {
  
  return (
    <div className={s.profile}>
      <Cover background={owner.background}/>
      <Owner owner={owner}/>
      <Posts avatar={owner.avatar} posts={posts}/>
    </div>
  );
}

export default Profile;
