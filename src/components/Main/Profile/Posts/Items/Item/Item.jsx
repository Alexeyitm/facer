import React from 'react';
import s from './Item.module.css';

function Item() {
  return (
    <li className={s.item}>
      <img className={s.avatar} src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg" alt="avatar"/>
      <p className={s.text}>Hello, world!</p>
      <div className={s.like}>
        <button className={s.heart}></button>
        <span className={s.counter}>14</span>
      </div>
    </li>
  );
}

export default Item;
