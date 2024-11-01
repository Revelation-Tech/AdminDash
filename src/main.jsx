import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Login from '../src/components/dashboard/auth/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  
  {
    path: "/login",
    element: <Login/> ,
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
