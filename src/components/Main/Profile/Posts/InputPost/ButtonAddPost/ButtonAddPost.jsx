import React from 'react';
import s from './ButtonAddPost.module.css';

function ButtonAddPost({ addPost, inputPost }) {
  
  return (
    <button className={s.button} onClick={() => addPost(inputPost.current.value)}>Add Post</button>
  );
}

export default ButtonAddPost;
