import { useState } from 'react'
import SideBar from './components/sideBar/SideBar'
import Search from './components/search/Search'
import Trending from './components/Trending'
import './App.css'

function App() {
  return (
    <>
    <div id='container'>
      <SideBar/>
      <main>
        <Search/>
        <Trending/>
      </main>
    </div>
    </>
  )
}

export default App
