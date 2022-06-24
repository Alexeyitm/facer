import React from 'react';
import s from './Items.module.css';
import Item from './Item/Item';

function Items({ avatar, posts }) {

  const postsElements = posts.map(post => <Item avatar={avatar} text={post.text} likes={post.likeCount} key={post.id}/>).reverse();

  return (
    <ul className={s.items}>
      { postsElements }
    </ul>
  );
}

export default Items;
