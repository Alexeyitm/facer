import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <Users />
      <Messages />
    </div>
  );
}

export default Dialogs;
