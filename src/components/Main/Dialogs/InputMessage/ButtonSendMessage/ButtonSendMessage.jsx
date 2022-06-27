import React from 'react';
import s from './ButtonSendMessage.module.css';

function ButtonSendMessage({ dispatch }) {

  const addNewMessage = () => {
    dispatch({type: 'ADD-MESSAGE'});
  }
  
  return (
    <button className={s.button} onClick={addNewMessage}></button>
  );
}

export default ButtonSendMessage;
