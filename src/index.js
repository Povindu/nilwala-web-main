import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './routes/HomePage/HomePage'
import TicketPortal from './routes/TicketPortal/TicketPortal'
import ErrorPage from './routes/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/123",
      element: <h1>Test</h1>,
    },
    {
      path: "/app",
      element: <TicketPortal/>,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

