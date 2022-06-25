import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

function Main({ owner, pages, addPost, updateNewPostText, addMessage, updateNewMessageText }) {
  
  return (
    <main className={s.main}>
      <Routes>
        <Route path='/' element={<Profile 
                                  owner={owner}
                                  posts={pages.profilePage.posts}
                                  newPostText={pages.profilePage.newPostText}
                                  addPost={addPost}
                                  updateNewPostText={updateNewPostText}/>} />
        <Route path='/dialogs' element={<Dialogs 
                                          users={pages.dialogsPage.users}
                                          messages={pages.dialogsPage.messages}
                                          newMessageText={pages.dialogsPage.newMessageText}
                                          addMessage={addMessage}
                                          updateNewMessageText={updateNewMessageText}/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </main>
  );
}

export default Main;
