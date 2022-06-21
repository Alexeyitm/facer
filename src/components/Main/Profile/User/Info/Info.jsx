import React from 'react';
import s from './Info.module.css';

function Info() {
  return (
    <div className={s.info}>
      <h1 className={s.title}>Alexey Ponomarev</h1>
      <ul className={s.description}>
        <li className={s.item}>Date of Birth:</li>
        <li className={s.item}>City:</li>
        <li className={s.item}>Education:</li>
      </ul>
    </div>
  );
}

export default Info;
