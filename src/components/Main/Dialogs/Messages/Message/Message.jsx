import React from 'react';
import s from './Message.module.css';

function Message({ text }) {
  return (
    <li className={s.message}>{text}</li>
  );
}

export default Message;
