import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderer = (state) => {
  
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App 
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </HashRouter>
    </React.StrictMode>
  );
}

