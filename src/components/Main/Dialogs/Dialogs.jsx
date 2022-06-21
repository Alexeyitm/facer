import React from 'react';
import s from './Dialogs.module.css';
import Users from './Users/Users';

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <Users />
      
    </div>
  );
}

export default Dialogs;
