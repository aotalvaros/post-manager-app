import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouterPages } from './pages/RouterPages'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RouterPages />
  </BrowserRouter>
)
