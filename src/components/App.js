import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

function App({ posts, users, messages }) {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main posts={posts} users={users} messages={messages}/>
    </div>
  );
}

export default App;
