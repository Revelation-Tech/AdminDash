import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Login from "@pages/auth/Login.jsx";
import Overview from "@pages/dashboard/Overview.jsx";
import Faqs from "@pages/dashboard/faq.jsx";
import Settings from "@pages/dashboard/settings.jsx";
import Team from "@pages/dashboard/settings/team.jsx";
import Home from "@pages/dashboard/settings/home.jsx";
import { Preferences } from "@pages/dashboard/settings/preferences.jsx";
import { ProfileInfo } from "@pages/dashboard/settings/ProfileInfo.jsx";
import { Password } from "@pages/dashboard/settings/Password.jsx";
import { Security } from "@pages/dashboard/settings/Security.jsx";
import { Movies } from "@pages/dashboard/Movies.jsx";
import { All } from "@pages/dashboard/Transaction/All.jsx";
import { Transaction } from "@pages/dashboard/Transaction/Transaction.jsx";
import { Airtime } from "@pages/dashboard/Transaction/Airtime.jsx";
import Cable from "@pages/dashboard/Transaction/Cable.jsx";
import MainTransaction from "@pages/dashboard/MainTransaction/MainTransaction";
import Users from "@pages/dashboard/Users/Users.jsx";
import ErrorPage from "@pages/dashboard/ErrorPage.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import PreviewTransaction from "@pages/dashboard/MainTransaction/preview/index.jsx";
import UserProfile from "@pages/dashboard/Users/preview/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "/transaction",
        element: <MainTransaction />,
      },
      {
        path: "/transaction/:id",
        element: <PreviewTransaction />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:userID",
        element: <UserProfile />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "", // Relative to /settings
            element: <Home />,
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
            path: "team", // Relative to /settings
            element: <Team />,
          },
          {
            path: "preferences", // Relative to /settings
            element: <Preferences />,
          },
        ],
      },

      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/bills",
        element: <Transaction />,
        children: [
          {
            path: "",
            element: <All />,
          },
          {
            path: "airtime",
            element: <Airtime />,
          },
          {
            path: "data",
            element: <Airtime />,
          },
          {
            path: "tv",
            element: <Cable />,
          },
          {
            path: "electricity",
            element: <Cable />,
          },
          {
            path: "betting",
            element: <Cable />,
          },

          {
            path: "religious",
            element: <All />,
          },

          {
            path: "fuel",
            element: <All />,
          },
        ],
      },
    ],
  },
]);

export default router;
