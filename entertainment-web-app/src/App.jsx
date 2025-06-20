import { useState } from 'react'
import SideBar from './components/sideBar/SideBar'
import Search from './components/search/Search'
import Trending from './components/trending/Trending.jsx'
import './App.css'
import Content from './components/content/Content.jsx'

function App() {
  return (
    <>
    <div id='container'>
      <SideBar/>
      <main>
        <Search/>
        <Trending/>
        <Content/>
      </main>
    </div>
    </>
  )
}

export default App
