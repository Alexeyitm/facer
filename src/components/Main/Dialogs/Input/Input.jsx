import React from 'react';
import s from './Input.module.css';

function Input() {
  return (
    <div className={s.input}>
      <textarea className={s.textarea}></textarea>
    </div>
  );
}

export default Input;
