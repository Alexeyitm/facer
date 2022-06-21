import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';

function Main() {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/messages" element={<Messages/>} />
      </Routes>
    </main>
  );
}

export default Main;
