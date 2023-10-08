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
        element:<EventsDetails></EventsDetails>,
        loader:()=>fetch('/events.json')
      },
      // {
      //   path:"/gallery",
      //  element:<Instructors></Instructors>,
      
      // },
      {
        path:"/instructor/:id",
        element:<InstructorDetails></InstructorDetails>,
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
