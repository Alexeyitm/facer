import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'

function InputMessage({ newMessageText, addMessage }) {

  const inputMessage = React.createRef();
  
  return (
    <div className={s.input}>
      <textarea className={s.textarea} ref={inputMessage} value={newMessageText}></textarea>
      <ButtonSendMessage addMessage={addMessage} inputMessage={inputMessage}/>
    </div>
  );
}

export default InputMessage;
