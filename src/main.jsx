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
        element:<CourseDetails></CourseDetails>,
       loader:()=>fetch('/data.json')
      },
      {
        path:"/event/:id",
        element:<EventsDetails></EventsDetails>,
        loader:()=>fetch('/events.json')
      }
    ],

   
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
