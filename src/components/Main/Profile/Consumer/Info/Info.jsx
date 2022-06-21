import React from 'react';
import s from './Info.module.css';

function Info({ name, dataOfBirth, city, education}) {
  return (
    <div className={s.info}>
      <h1 className={s.title}>{name}</h1>
      <ul className={s.description}>
        <li className={s.item}>Date of Birth: {dataOfBirth}</li>
        <li className={s.item}>City: {city}</li>
        <li className={s.item}>Education: {education}</li>
      </ul>
    </div>
  );
}

export default Info;
