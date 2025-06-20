import Login from './components/user/Login.jsx'
import App from './App.jsx';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/user/SignUp.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/login', element: <Login/>},
  {path: '/signup', element: <SignUp/>}
])

export default function Router(){
  return <RouterProvider router={router}/>
}
