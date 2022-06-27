import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

function App({ state, dispatch }) {
  return (
    <div className='app'>
      <Header />
      <Nav friends={state.owner.friends}/>
      <Main
        owner={state.owner}
        pages={state.pages}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
