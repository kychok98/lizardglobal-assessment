import React from 'react';
import { CategoryFilter, PostList } from 'src/modules/Posts';

const PostPage = () => {
  return (
    <main className="m-auto flex h-screen w-screen max-w-2xl flex-col p-2">
      <header>Lizard Global Assessment</header>

      <CategoryFilter />
      <PostList />
    </main>
  );
};

export default PostPage;
