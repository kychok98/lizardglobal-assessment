import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from 'src/api/posts';

const PostDetails = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: ['todos1'],
    queryFn: () => getPostById(params.id as string),
  });

  return (
    <div className="flex flex-col">
      <h1>This is the post details page</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default PostDetails;
