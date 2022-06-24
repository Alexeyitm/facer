import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

function Messages({ messages }) {

  const messagesElements = messages.map(message => <Message text={message.text} key={message.id}/>);

  return (
    <ul className={s.messages}>
      { messagesElements }
    </ul>
  );
}

export default Messages;
