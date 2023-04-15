import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../api/posts';
import { BiArrowBack } from 'react-icons/bi';

const PostDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data } = useQuery({
    queryKey: ['todos1'],
    queryFn: () => getPostById(params.id as string),
  });

  const renderBackButton = () => {
    if (!location.hash.includes('#')) return;

    return (
      <BiArrowBack
        className="cursor-pointer rounded-2xl border text-4xl text-primary opacity-80 shadow hover:opacity-100"
        onClick={() => navigate(-1)}
      />
    );
  };

  return (
    <div className="flex flex-col">
      {renderBackButton()}
      <h1>This is the post details page</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default PostDetails;
