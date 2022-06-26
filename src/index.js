import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
const renderer = (state) => {
  root.render(
  <React.StrictMode>
    <HashRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </HashRouter>
  </React.StrictMode>
  );
}

renderer(store.getState());

store.subscribe(renderer)


reportWebVitals();
