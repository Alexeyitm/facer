import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

function App({ state }) {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main state={state}/>
    </div>
  );
}

export default App;
