import React from 'react';
import s from './Info.module.css';

function Info({ owner }) {
  return (
    <div className={s.info}>
      <h1 className={s.title}>{owner.name + ' ' + owner.lastName}</h1>
      <ul className={s.description}>
        <li className={s.item}>Date of Birth: {owner.dayOfBirth + '.' + owner.monthOfBirth + '.' + owner.yearOfBirth}</li>
        <li className={s.item}>Location: {owner.city + ', ' + owner.country}</li>
        <li className={s.item}>Education: {owner.education}</li>
      </ul>
    </div>
  );
}

export default Info;
