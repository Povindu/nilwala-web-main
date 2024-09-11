import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // createBrowserRouter,
  // RouterProvider,
  createHashRouter,
  RouterProvider
} from "react-router-dom";

import './index.css';

// import HomePage from './routes/HomePage/HomePage'
import TicketPortal from './pages/TicketPortal/TicketPortal'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ChroniclePage from './pages/ChroniclePage/ChroniclePage';
import DirectoryPage from './pages/DirectoryPage/DirectoryPage';

import HomePageComp from './components/HomePageComp/HomePageComp';

const router = createHashRouter([
    {
      path: "/",
      element: <HomePageComp/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/leonaada24xyz",
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
