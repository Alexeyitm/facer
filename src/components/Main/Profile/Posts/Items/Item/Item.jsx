import React from 'react';
import s from './Item.module.css';

function Item({ text, likes }) {
  return (
    <li className={s.item}>
      <img className={s.avatar} src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg" alt="avatar"/>
      <p className={s.text}>{text}</p>
      <div className={s.like}>
        <button className={s.heart}></button>
        <span className={s.counter}>{likes}</span>
      </div>
    </li>
  );
}

export default Item;
