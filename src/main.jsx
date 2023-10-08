import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';

import CourseDetails from './Pages/CourseDetails';
import Root from './Layout/Root';
import ErrorPage from './ErorrPage/ErrorPage';
import EventsDetails from './Pages/EventsDetails';

import InstructorDetails from './Pages/InstructorDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Hooks/AuthProvider';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';
import AboutUs from './Pages/About/AboutUs';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader:()=> fetch('/services.json'),
      },
      {
        path:"/service/:id",
        element:<PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
       loader:()=>fetch('/data.json')
      },
      {
        path:"/event/:id",
        element:<PrivateRoutes><EventsDetails></EventsDetails></PrivateRoutes>,
        loader:()=>fetch('/events.json')
      },
      {
        path:"/about",
       element:<AboutUs></AboutUs>,
      
      },
      {
        path:"/contact",
       element:<Contact></Contact>,
      
      },
      {
        path:"/instructor/:id",
        element:<PrivateRoutes><InstructorDetails></InstructorDetails></PrivateRoutes>,
        loader:()=>fetch('/services.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    
    ],

   
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
