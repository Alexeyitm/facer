import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
const renderer = (state) => {
  debugger;
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
//store.subscribe(renderer);

store.subscribe(() => {
  let state = store.getState();
  renderer(state);
})


reportWebVitals();
