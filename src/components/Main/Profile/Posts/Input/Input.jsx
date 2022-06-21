import React from 'react';
import s from './Input.module.css';

function Input() {
  return (
    <div>
      <h2 className={s.title}>My Posts</h2>
      <input className={s.input}></input>
    </div>
  );
}

export default Input;
