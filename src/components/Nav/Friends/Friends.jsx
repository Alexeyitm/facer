import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

function Friends() {
  return (
    <ul className={s.friends}>
      <h2 className={s.title}>My Friends</h2>
      <Friend/>
    </ul>
  );
}

export default Friends;
