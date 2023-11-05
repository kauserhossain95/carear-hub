import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Root } from './componants/root/Root';
import { Home } from './componants/home/Home';
import { Error } from './componants/errorPage/Error';
import { Statistics } from './componants/statisticsPage/statistics';
import { Applied } from './componants/applyPage/Applied';
import { Blogs } from './componants/blogPage/Blogs';
import { JobDetails } from './componants/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/apply',
        element: <Applied></Applied>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        loader: () => fetch('../jobs.json'),
        element: <JobDetails></JobDetails>,
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
