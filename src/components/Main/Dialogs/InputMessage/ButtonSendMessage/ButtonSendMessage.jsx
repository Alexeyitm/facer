import React from 'react';
import s from './ButtonSendMessage.module.css';

function ButtonSendMessage({ addMessage, inputMessage }) {

  const addNewMessage = () => {
    addMessage(inputMessage.current.value);
    inputMessage.current.value = '';
  }
  
  return (
    <button className={s.button} onClick={addNewMessage}></button>
  );
}

export default ButtonSendMessage;
