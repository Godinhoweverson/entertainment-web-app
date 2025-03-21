import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/sideBar/sideBar.css'
import './components/search/search.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
