import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import PostPage from 'src/pages/post/index';
import PostDetailsPage from 'src/pages/post/[id]';
import Layout from 'src/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/post" replace /> },
      { path: '/post', element: <PostPage /> },
      {
        path: '/post/:id',
        element: <PostDetailsPage />,
      },
    ],
  },
]);

export default router;
