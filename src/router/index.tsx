import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import PostDetails from 'src/components/PostDetails';
import PostPage from 'src/pages/post';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/post" replace /> },
      { path: '/post', element: <PostPage /> },
      {
        path: '/post/:id',
        element: <PostDetails />,
      },
    ],
  },
]);

export default router;
