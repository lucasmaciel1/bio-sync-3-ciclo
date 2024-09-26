import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home/Home.jsx'
import { DefaultLayout } from './layouts/default-layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DefaultLayout/>

  </StrictMode>
)
