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
      path: "/nilwala-web-main",
      element: <HomePageComp/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/nilwala-web-main/nilwalanight23",
      element: <TicketPortal/>,
    },
    {
      path: "/nilwala-web-main/chronicle",
      element: <ChroniclePage/>,
    },
    {
      path: "/nilwala-web-main/directory",
      element: <DirectoryPage/>,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

