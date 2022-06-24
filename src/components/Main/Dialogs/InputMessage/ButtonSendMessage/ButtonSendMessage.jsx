import React from 'react';
import s from './ButtonSendMessage.module.css';

function ButtonSendMessage({ sendMessage }) {
  
  return (
    <button className={s.button} onClick={sendMessage}></button>
  );
}

export default ButtonSendMessage;
