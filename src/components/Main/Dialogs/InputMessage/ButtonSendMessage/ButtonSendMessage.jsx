import React from 'react';
import s from './ButtonSendMessage.module.css';

function ButtonSendMessage({ addMessage }) {

  const addNewMessage = () => {
    addMessage();
  }
  
  return (
    <button className={s.button} onClick={addNewMessage}></button>
  );
}

export default ButtonSendMessage;
