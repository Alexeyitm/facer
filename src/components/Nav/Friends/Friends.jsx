import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

function Friends({ friends }) {
  return (
    <div className={s.friends}>
      <h2 className={s.title}>My Friends</h2>
      <ul className={s.list}>
        {friends.map(friend => <Friend avatar={friend.avatar} name={friend.name} key={friend.id}/>)}
      </ul>
    </div>
  );
}

export default Friends;
