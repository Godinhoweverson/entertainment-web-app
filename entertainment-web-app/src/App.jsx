import { useState } from 'react'
import SideBar from './components/sideBar/SideBar'
import Search from './components/search/Search'
import Trending from './components/trending/Trending.jsx'
import './App.css'
import Content from './components/content/Content.jsx'
import Login from './components/user/Login.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/login', element: <Login/>}
])

export function Router(){
  return <RouterProvider router={router}/>
}

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
