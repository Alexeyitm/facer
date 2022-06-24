import React from 'react';
import s from './ButtonAddPost.module.css';

function ButtonAddPost({ addPost, inputPost }) {

  const addNewPost = () => {
    addPost(inputPost.current.value);
    inputPost.current.value = '';
  }
  
  return (
    <button className={s.button} onClick={addNewPost}>Add Post</button>
  );
}

export default ButtonAddPost;
