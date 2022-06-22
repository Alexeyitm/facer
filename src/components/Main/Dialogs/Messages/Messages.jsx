import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

function Messages() {

  const messages = [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'Hello'},
    {id: 3, text: 'Hello'},
    {id: 4, text: 'Hello'},
    {id: 5, text: 'Hello'},
    {id: 6, text: 'Hello'},
    {id: 7, text: 'Hello'},
    {id: 8, text: 'Hello'},
    {id: 9, text: 'Hello'},
    {id: 10, text: 'Hello'}
  ]

  return (
    <ul className={s.messages}>
      {messages.map(message => <Message text={message.text} key={message.id}/>)}
    </ul>
  );
}

export default Messages;
