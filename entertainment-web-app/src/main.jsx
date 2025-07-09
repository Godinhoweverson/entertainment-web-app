import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/sideBar/sideBar.css'
import './components/search/search.css'
import './components/trending/trending.css'
import './components/util/util.css'
import './components/content/content.css'
import './components/user/login.css'
import './components/profile/profile.css'

import store  from '../src/store'
import { Provider } from 'react-redux'
import Router from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
