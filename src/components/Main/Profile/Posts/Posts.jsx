import React from 'react';
import s from './Posts.module.css';
import InputPost from './InputPost/InputPost';
import Items from './Items/Items';

function Posts({ avatar, posts, addPost }) {
  
  return (
    <div className={s.posts}>
      <InputPost addPost={addPost}/>
      <Items avatar={avatar} posts={posts}/>
    </div>
  );
}

export default Posts;
