import React from 'react';
import s from './ButtonSendMessage.module.css';

function ButtonSendMessage({ addMessage, inputMessage }) {
  
  return (
    <button className={s.button} onClick={() => addMessage(inputMessage.current.value)}></button>
  );
}

export default ButtonSendMessage;
