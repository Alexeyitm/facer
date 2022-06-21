import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

function Main() {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dialogs" element={<Dialogs/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </main>
  );
}

export default Main;
