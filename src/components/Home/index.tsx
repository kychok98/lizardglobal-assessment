import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1>This is the home page</h1>
      <Link to="post">View Post Page</Link>
      <Link to="post/1">View Post detail Page</Link>
    </div>
  );
};

export default Home;
