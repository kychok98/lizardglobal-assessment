import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Post from '../components/Post';
import PostDetails from '../components/PostDetails';
import Home from '../components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/post/:id',
    element: <PostDetails />,
  },
]);

export default router;
