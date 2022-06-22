import React from 'react';
import s from './Item.module.css';

function Item({ avatar, text, likes }) {
  return (
    <li className={s.item}>
      <img className={s.avatar} src={avatar} alt='Avatar'/>
      <p className={s.text}>{text}</p>
      <div className={s.like}>
        <button className={s.heart}></button>
        <span className={s.counter}>{likes}</span>
      </div>
    </li>
  );
}

export default Item;
