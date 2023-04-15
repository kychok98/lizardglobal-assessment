import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'src/api/posts';
import Post from 'src/modules/Posts/Post';
import Loading from 'src/components/Loading';

const PostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <Loading />;

  if (!data?.posts) return <div>No data...</div>;

  return (
    <section className="flex flex-col gap-2">
      {data.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default PostList;
