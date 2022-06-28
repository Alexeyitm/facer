import React from 'react';
import s from './ButtonAddPost.module.css';
import { addPostActionCreator } from '../../../../../../redux/profile-reducer';

function ButtonAddPost({ dispatch }) {

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  }
  
  return (
    <button className={s.button} onClick={addNewPost}>Add Post</button>
  );
}

export default ButtonAddPost;
