import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import state, { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
const renderer = (state) => {
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

renderer(state);

subscribe(renderer)


reportWebVitals();
