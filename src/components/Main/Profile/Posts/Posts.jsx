import React from 'react';
import s from './Posts.module.css';
import InputPost from './InputPost/InputPost';
import Items from './Items/Items';

function Posts({ avatar, posts, newPostText, dispatch }) {
  
  return (
    <div className={s.posts}>
      <InputPost 
        newPostText={newPostText}
        dispatch={dispatch}
      />
      <Items
        avatar={avatar}
        posts={posts}
      />
    </div>
  );
}

export default Posts;
