import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'src/api/posts';
import Post from 'src/components/Post';

const PostPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data...</div>;

  return (
    <main className="m-auto flex h-screen w-screen max-w-2xl flex-col p-2">
      <header>Lizard Global Assessment</header>
      <section className="flex flex-col gap-2">
        {data.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </section>
    </main>
  );
};

export default PostPage;
