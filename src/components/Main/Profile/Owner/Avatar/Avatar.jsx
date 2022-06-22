import React from 'react';
import s from './Avatar.module.css';

function Avatar({ avatar }) {
  return (
    <img className={s.avatar} src={avatar} alt='Avatar'/>
  );
}

export default Avatar;
