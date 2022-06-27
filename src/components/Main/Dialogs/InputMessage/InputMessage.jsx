import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'

function InputMessage({ newMessageText, dispatch }) {

  const inputMessage = React.createRef();

  const onMessageChange = () => {
    dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: inputMessage.current.value})
  }
  
  return (
    <div className={s.input}>
      <textarea className={s.textarea} ref={inputMessage} value={newMessageText} onChange={onMessageChange}></textarea>
      <ButtonSendMessage dispatch={dispatch}/>
    </div>
  );
}

export default InputMessage;
