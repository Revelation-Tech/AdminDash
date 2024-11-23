import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
 import Login from './components/dashboard/auth/Login.jsx';
import Overview from './components/dashboard/Overview.jsx';
import Faqs from './components/dashboard/faq.jsx';
import Settings from './components/dashboard/settings.jsx';
import Team from './components/dashboard/settings/team.jsx';
import Home from './components/dashboard/settings/home.jsx';
import { Preferences } from './components/dashboard/settings/preferences.jsx';
import { ProfileInfo } from './components/dashboard/settings/ProfileInfo.jsx';
import { Password } from './components/dashboard/settings/Password.jsx';
import { Security } from './components/dashboard/settings/Security.jsx';
import { Movies } from './components/dashboard/Movies.jsx';
import { All } from './components/dashboard/Transaction/All.jsx';
import { Transaction } from './components/dashboard/Transaction/Transaction.jsx';
import { Airtime } from './components/dashboard/Transaction/Airtime.jsx';


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
        path: "", // Relative to /settings
        element: <Home/>,
        children: [
          {
            path: "", // Default route for /settings/account
            element: <ProfileInfo />,
          },
          {
            path: "password", // Default route for /settings/account
            element: <Password />,
          },
          {
            path: "security", // Default route for /settings/account
            element: <Security />,
          },
         
        ],
      },
      
      {
        path: "team",      // Relative to /settings
        element: <Team />,
      },
      {
        path: "preferences",      // Relative to /settings
        element: <Preferences />,
      },
    ]
    
  },

  {
    path: "/movies",
    element: <Movies/> ,
  },
  {
    path:'/transaction',
    element: <Transaction/>,
    children:[

      {
        path:'',
        element: <All/>
      },
      {
        path:'airtime',
        element: <Airtime/>
      },
      
    ]
  }
  
]);


createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
)
