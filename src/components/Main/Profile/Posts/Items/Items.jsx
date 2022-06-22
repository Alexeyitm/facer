import React from 'react';
import s from './Items.module.css';
import Item from './Item/Item';

function Items({ avatar, posts }) {
  return (
    <ul className={s.items}>
      {posts.map(post => <Item avatar={avatar} text={post.text} likes={post.likeCount} key={post.id}/>)}
    </ul>
  );
}

export default Items;
