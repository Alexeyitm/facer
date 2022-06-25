import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
//import { addMessage } from '../redux/state';

function App({ state, addPost, updateNewPostText, addMessage, updateNewMessageText }) {
  
  return (
    <div className='app'>
      <Header />
      <Nav friends={state.owner.friends}/>
      <Main
        owner={state.owner}
        pages={state.pages}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </div>
  );
}

export default App;
