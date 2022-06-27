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
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </HashRouter>
  </React.StrictMode>
  );
}

renderer(store.getState());
store.subscribe(renderer)


reportWebVitals();
