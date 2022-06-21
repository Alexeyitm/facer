import React from 'react';
import s from './Main.module.css';
import Profile from './Profile/Profile';

function Main() {
  return (
    <main className={s.main}>
      <Profile />
    </main>
  );
}

export default Main;
