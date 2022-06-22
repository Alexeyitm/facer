import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, text: 'It was a good day!', likeCount: 3},
  {id: 2, text: "What's happening?", likeCount: 6},
  {id: 3, text: 'Yeeeaaaaaaaaaaa', likeCount: 11},
  {id: 4, text: 'Hello, world!', likeCount: 14},
]

const users = [
  {id: 1, name: 'Petya'},
  {id: 2, name: 'Ivan'},
  {id: 3, name: 'Kolya'},
  {id: 4, name: 'Dima'},
  {id: 5, name: 'Olya'},
  {id: 6, name: 'Artem'},
  {id: 7, name: 'Petya'},
  {id: 8, name: 'Ivan'},
  {id: 9, name: 'Kolya'},
  {id: 10, name: 'Dima'},
  {id: 11, name: 'Olya'},
  {id: 12, name: 'Artem'},
]

const messages = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'Hello'},
  {id: 3, text: 'Hello'},
  {id: 4, text: 'Hello'},
  {id: 5, text: 'Hello'},
  {id: 6, text: 'Hello'},
  {id: 7, text: 'Hello'},
  {id: 8, text: 'Hello'},
  {id: 9, text: 'Hello'},
  {id: 10, text: 'Hello'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App posts={posts} users={users} messages={messages}/>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
