import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import InputMessage from './InputMessage/InputMessage';

function Dialogs({ users, messages, newMessageText, dispatch }) {
  
  return (
    <div className={s.dialogs}>
      <Users users={users} />
      <Messages messages={messages} />
      <InputMessage
        newMessageText={newMessageText}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Dialogs;
