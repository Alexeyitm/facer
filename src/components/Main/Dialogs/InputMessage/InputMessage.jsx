import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'
import { updateNewMessageTextActionCreator } from '../../../../redux/state';

function InputMessage({ newMessageText, dispatch }) {

  const inputMessage = React.createRef();

  const onMessageChange = () => {
    dispatch(updateNewMessageTextActionCreator(inputMessage.current.value))
  }
  
  return (
    <div className={s.input}>
      <textarea 
        className={s.textarea}
        ref={inputMessage}
        onChange={onMessageChange}
        value={newMessageText}
        placeholder={'Enter your message'}
      >
      </textarea>
      <ButtonSendMessage dispatch={dispatch}/>
    </div>
  );
}

export default InputMessage;
