import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Login from './components/dashboard/auth/login.jsx';
import Overview from './components/dashboard/Overview.jsx';
import Faqs from './components/dashboard/faq.jsx';
import Settings from './components/dashboard/settings.jsx';
import Team from './components/dashboard/settings/team.jsx';
import Home from './components/dashboard/settings/home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Overview/>,
  },
  
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/faqs",
    element: <Faqs/> ,
  },
  {
    path:"/settings",
    element: <Settings/>,
    children: [
      
      {
        path: "team",      // Relative to /settings
        element: <Team />,
      },
    ]
    
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
