import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

// import HomePage from './routes/HomePage/HomePage'
import TicketPortal from './routes/TicketPortal/TicketPortal'
import ErrorPage from './routes/ErrorPage/ErrorPage';
import ChroniclePage from './routes/ChroniclePage/ChroniclePage';
import DirectoryPage from './routes/DirectoryPage/DirectoryPage.js';

import HomePageComp from './components/HomePageComp/HomePageComp';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageComp/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/nilwalanight23",
      element: <TicketPortal/>,
    },
    {
      path: "/chronicle",
      element: <ChroniclePage/>,
    },
    {
      path: "/directory",
      element: <DirectoryPage/>,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

