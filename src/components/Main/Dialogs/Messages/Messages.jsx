import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

function Messages() {
  return (
    <ul className={s.messages}>
      <Message text="Hi!"/>
      <Message text="Hi!"/>
      <Message text="no!"/>
      <Message text="Hi!"/>
      <Message text="Hi!"/>
      <Message text="dfsgdfgfh"/>
      <Message text="Hi!"/>
      <Message text="Hi!"/>
      <Message text="13224354657687980"/>
      <Message text="Hi!"/>
      <Message text="Hi!"/>
    </ul>
  );
}

export default Messages;
