import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';

function Dialogs({ users, messages }) {
  return (
    <div className={s.dialogs}>
      <Users users={users} />
      <Messages messages={messages} />
    </div>
  );
}

export default Dialogs;
