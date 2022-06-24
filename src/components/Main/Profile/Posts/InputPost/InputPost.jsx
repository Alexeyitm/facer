import React from 'react';
import s from './InputPost.module.css';
import ButtonAddPost from './ButtonAddPost/ButtonAddPost';

function InputPost({ inputPostValue, addPost }) {

  const inputPost = React.createRef();
  
  return (
    <div className={s.input}>
      <h2 className={s.title}>My Posts</h2>
      <textarea className={s.textarea} ref={inputPost} value={inputPostValue}></textarea>
      <ButtonAddPost addPost={addPost} inputPost={inputPost}/>
    </div>
  );
}

export default InputPost;
