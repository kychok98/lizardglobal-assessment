import React from 'react';
import PostList from 'src/modules/Posts/PostList';

const PostPage = () => {
  return (
    <main className="m-auto flex h-screen w-screen max-w-2xl flex-col p-2">
      <header>Lizard Global Assessment</header>

      <PostList />
    </main>
  );
};

export default PostPage;
