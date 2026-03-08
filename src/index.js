import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

// Send cookies automatically with every request
axios.defaults.withCredentials = true;
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './Components/RouteGuards';
import { store } from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
