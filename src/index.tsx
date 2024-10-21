import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouterPages } from './pages/RouterPages'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterPages />
    </BrowserRouter>
  </Provider>
)
