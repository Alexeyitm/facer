import React from 'react';
import s from './InputPost.module.css';
import ButtonAddPost from './ButtonAddPost/ButtonAddPost';

function InputPost({ newPostText, dispatch }) {

  const inputPost = React.createRef();

  const onPostChange = () => {
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: inputPost.current.value})
  }
  
  return (
    <div className={s.input}>
      <h2 className={s.title}>My Posts</h2>
      <textarea className={s.textarea} ref={inputPost} value={newPostText} onChange={onPostChange}></textarea>
      <ButtonAddPost dispatch={dispatch}/>
    </div>
  );
}

export default InputPost;
