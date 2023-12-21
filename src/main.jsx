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
import CreateTask from './Components/CreateTask';
import Profile from './Components/Profile';
import ViewTasks from './Components/ViewTasks';

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
    path: "dashboard",
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
        element: <CreateTask></CreateTask>,
      },
      {
        path: "viewTasks",
        element:<ViewTasks></ViewTasks>,
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
