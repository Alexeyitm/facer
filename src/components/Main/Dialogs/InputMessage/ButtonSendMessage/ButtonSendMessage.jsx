import React from 'react';
import s from './ButtonSendMessage.module.css';
import { addMessageActionCreator } from '../../../../../redux/state';

function ButtonSendMessage({ dispatch }) {

  const addNewMessage = () => {
    dispatch(addMessageActionCreator());
  }
  
  return (
    <button className={s.button} onClick={addNewMessage}></button>
  );
}

export default ButtonSendMessage;
