import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

function Messages({ messages }) {

  return (
    <ul className={s.messages}>
      {messages.map(message => <Message text={message.text} key={message.id}/>)}
    </ul>
  );
}

export default Messages;
