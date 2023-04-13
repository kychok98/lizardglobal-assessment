import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../api/posts';

const PostDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data } = useQuery({
    queryKey: ['todos1'],
    queryFn: () => getPostById(params.id as string),
  });

  return (
    <div className="flex flex-col">
      <h1>This is the post details page</h1>
      <button onClick={() => navigate(-1)}>back</button>

      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default PostDetails;
