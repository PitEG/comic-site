import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home.jsx';
import Comic from './Comic.jsx';
import Chapter from './Chapter.jsx';
import Root from './Root.jsx';

export default function App() {
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:":comic",
          element: <Comic/>,
          loader: async ({params}) => {
            return fetch(`http://localhost:8080/${params.comic}.json`);
          },
        },
        {
          path:":comic/:chapter",
          element: <Chapter/>,
        }
      ],
    },

  ],{
    basename: "/comics"
  });

  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
