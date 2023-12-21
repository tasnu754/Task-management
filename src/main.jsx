import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Components/MainPage';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import FeedBack from './Components/FeedBack';
import Authenticate from './Components/Authenticate';
import Register from './Components/Register';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Dashboard/Profile';
import Create from './Components/Dashboard/Create';
import ViewTask from './Components/Dashboard/ViewTask';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "editTask",
        element: <Create></Create>,
      },
      {
        path: "viewTask",
        element: <ViewTask></ViewTask>,
        loader: () => axios("https://task-managment-server-ten.vercel.app/tasks"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticate>
      <RouterProvider router={router} />
    </Authenticate>
  </React.StrictMode>
);
