import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/sideBar/sideBar.css'
import './components/search/search.css'
import './components/trending/trending.css'
import './components/Util/util.css'
import './components/content/content.css'
import App from './App.jsx'
import store  from '../src/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
