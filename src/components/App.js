import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import { addMessage } from '../redux/state';

function App({ state, addPost }) {
  
  return (
    <div className='app'>
      <Header />
      <Nav friends={state.owner.friends}/>
      <Main owner={state.owner} pages={state.pages} addPost={addPost} addMessage={addMessage}/>
    </div>
  );
}

export default App;
