import React from 'react';
import s from './Cover.module.css';

function Cover({ background }) {
  
  return (
    <img className={s.cover} src={background} alt='Background'/>
  );
}

export default Cover;
