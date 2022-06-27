import React from 'react';
import s from './InputPost.module.css';
import ButtonAddPost from './ButtonAddPost/ButtonAddPost';
import { updateNewPostTextActionCreator } from '../../../../../redux/state';

function InputPost({ newPostText, dispatch }) {

  const inputPost = React.createRef();

  const onPostChange = () => {
    dispatch(updateNewPostTextActionCreator(inputPost.current.value))
  }
  
  return (
    <div className={s.input}>
      <h2 className={s.title}>My Posts</h2>
      <textarea 
        className={s.textarea}
        ref={inputPost}
        onChange={onPostChange}
        value={newPostText}
        placeholder={'Enter new post'}
      >
      </textarea>
      <ButtonAddPost dispatch={dispatch} />
    </div>
  );
}

export default InputPost;
