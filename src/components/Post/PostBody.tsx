import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends Pick<Post, 'id' | 'title' | 'summary'> {}

const PostBody = ({ id, title, summary }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({ pathname: `/post/${id}`, hash: 'back' });
  };

  return (
    <section className="p-2">
      <h2
        className="mb-1 cursor-pointer font-bold leading-5 hover:underline md:leading-6"
        onClick={handleNavigate}
      >
        {title}
      </h2>
      <p className="text-gray-700">{summary}</p>
    </section>
  );
};

export default PostBody;
