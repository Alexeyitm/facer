import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

function Main({ posts, users, messages }) {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/" element={<Profile posts={posts}/>} />
        <Route path="/profile" element={<Profile posts={posts}/>} />
        <Route path="/dialogs" element={<Dialogs users={users} messages={messages}/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </main>
  );
}

export default Main;
