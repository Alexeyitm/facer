import React from 'react';
import s from './Profile.module.css';
import Cover from './Cover/Cover';
import Owner from './Owner/Owner';
import Posts from './Posts/Posts';

function Profile({ owner, posts, newPostText, dispatch}) {
  
  return (
    <div className={s.profile}>
      <Cover background={owner.background}/>
      <Owner owner={owner}/>
      <Posts
        avatar={owner.avatar}
        posts={posts}
        newPostText={newPostText}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Profile;
