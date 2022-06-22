import React from 'react';
import s from './Items.module.css';
import Item from './Item/Item';

const posts = [
  {id: 1, text: 'It was a good day!', likeCount: 3},
  {id: 2, text: "What's happening?", likeCount: 6},
  {id: 3, text: 'Yeeeaaaaaaaaaaa', likeCount: 11},
  {id: 4, text: 'Hello, world!', likeCount: 14},
]

function Items() {
  return (
    <ul className={s.items}>
      {posts.map(post => <Item text={post.text} likes={post.likeCount} key={post.id}/>)}
    </ul>
  );
}

export default Items;
