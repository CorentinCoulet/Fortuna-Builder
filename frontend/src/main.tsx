import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import Modal from 'react-modal';
import './styles/pages/Main.scss';
import { preloadAllImages } from './utils/preloadImages';
import React from 'react';

preloadAllImages();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

Modal.setAppElement('#root');

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
