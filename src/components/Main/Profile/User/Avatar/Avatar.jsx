import React from 'react';
import s from './Avatar.module.css';

function Avatar() {
  return (
    <img className={s.avatar} src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg" alt="Аватар"/>
  );
}

export default Avatar;
