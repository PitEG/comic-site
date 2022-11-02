import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Home.jsx';
import Comic from './Comic.jsx';
import Chapter from './Chapter.jsx';
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';

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
          errorElement: <ErrorPage/>,
          loader: async ({params}) => {
            return fetch(`http://localhost:8080/${params.comic}.json`);
          },
        },
        {
          path:":comic/:chapter",
          element: <Chapter/>,
          errorElement: <ErrorPage/>,
          loader: async ({params}) => {
            return fetch(`http://localhost:8080/${params.chapter}.json`);
          },
        }
      ],
    },

  ],{
    // basename: "/comics"
  });

  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
