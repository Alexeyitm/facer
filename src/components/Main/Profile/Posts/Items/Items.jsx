import React from 'react';
import s from './Items.module.css';
import Item from './Item/Item';

function Items() {
  return (
    <ul className={s.items}>
      <Item text="It was a good day!" likes="3"/>
      <Item text="What's happening?" likes="6"/>
      <Item text="Yeeeaaaaaaaaaaa" likes="11"/>
      <Item text="Hello, world!" likes="14"/>
    </ul>
  );
}

export default Items;
