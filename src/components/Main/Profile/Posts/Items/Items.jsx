import React from 'react';
import s from './Items.module.css';
import Item from './Item/Item';

function Items() {
  return (
    <ul className={s.items}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

export default Items;
