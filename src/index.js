import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css'
import 'bulma/css/bulma.css'
const el = document.getElementById('root')
const root = createRoot(el);

root.render(
<Provider store={store}>
  <App />    
</Provider>
);