import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../api/posts';

const Post = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data...</div>;

  return (
    <div>
      <h1>This is the post page</h1>
      <button onClick={() => navigate(-1)}>back</button>

      <div className="flex flex-col">
        {data.map(d => {
          return (
            <Link key={d.id} to={`/post/${d.id}`}>
              {d.id}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
