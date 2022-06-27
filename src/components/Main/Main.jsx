import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

function Main({ owner, pages, dispatch }) {
  
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/dialogs' element={<Dialogs 
                                          users={pages.dialogsPage.users}
                                          messages={pages.dialogsPage.messages}
                                          newMessageText={pages.dialogsPage.newMessageText}
                                          dispatch={dispatch} />} />
        <Route path='/news' element={<News/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path="*" element={<Profile 
                                  to="/profile"
                                  replace 
                                  owner={owner}
                                  posts={pages.profilePage.posts}
                                  newPostText={pages.profilePage.newPostText}
                                  dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;
