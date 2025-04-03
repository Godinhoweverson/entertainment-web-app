import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/sideBar/sideBar.css'
import './components/search/search.css'
import './components/trending/trending.css'
import './components/Util/util.css'
import './components/items/items.css'
import './components/content/content.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
