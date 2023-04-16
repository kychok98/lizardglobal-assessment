import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <main className="m-auto flex h-screen w-screen max-w-2xl flex-col p-2">
      <header>Lizard Global Assessment</header>

      <Outlet />
    </main>
  );
};

export default Layout;
