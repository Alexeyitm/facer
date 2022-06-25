import React from 'react';
import s from './ButtonAddPost.module.css';

function ButtonAddPost({ addPost }) {

  const addNewPost = () => {
    addPost();
  }
  
  return (
    <button className={s.button} onClick={addNewPost}>Add Post</button>
  );
}

export default ButtonAddPost;
