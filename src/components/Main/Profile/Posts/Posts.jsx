import React from 'react';
import s from './Posts.module.css';
import Input from './Input/Input';
import Button from './Button/Button';
import Items from './Items/Items';

function Posts({ posts }) {
  return (
    <div className={s.posts}>
      <Input />
      <Button />
      <Items posts={posts}/>
    </div>
  );
}

export default Posts;
