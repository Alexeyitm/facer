import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import InputMessage from './InputMessage/InputMessage';

function Dialogs({ users, messages, inputMessageValue, addMessage }) {
  
  return (
    <div className={s.dialogs}>
      <Users users={users} />
      <Messages messages={messages} />
      <InputMessage inputMessageValue={inputMessageValue} addMessage={addMessage}/>
    </div>
  );
}

export default Dialogs;
