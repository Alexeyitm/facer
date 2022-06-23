import React from 'react';
import s from './Input.module.css';
import Button from './Button/Button'

function Input() {
  return (
    <div className={s.input}>
      <textarea className={s.textarea}></textarea>
      <Button />
    </div>
  );
}

export default Input;
