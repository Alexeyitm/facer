import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import { addPost, addMessage } from './redux/state';

export const renderer = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state} addPost={addPost} addMessage={addMessage}/>
      </HashRouter>
    </React.StrictMode>
  );
}

