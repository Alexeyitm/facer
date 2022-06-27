import React from 'react';
import s from './ButtonAddPost.module.css';

function ButtonAddPost({ dispatch }) {

  const addNewPost = () => {
    dispatch({type: 'ADD-POST'});
  }
  
  return (
    <button className={s.button} onClick={addNewPost}>Add Post</button>
  );
}

export default ButtonAddPost;
