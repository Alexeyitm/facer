import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import Input from './Input/Input';

function Dialogs({ users, messages }) {
  
  return (
    <div className={s.dialogs}>
      <Users users={users} />
      <Messages messages={messages} />
      <Input />
    </div>
  );
}

export default Dialogs;
