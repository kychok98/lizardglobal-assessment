import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends Pick<Post, 'id' | 'title' | 'summary'> {}

const PostBody = ({ id, title, summary }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({ pathname: `/post/${id}` });
  };

  return (
    <section className="my-2">
      <h2
        title={title}
        className="inline-block w-full cursor-pointer truncate font-bold leading-5 hover:underline"
        onClick={handleNavigate}
      >
        {title}
      </h2>
      <p className="line-clamp-2 text-sm text-gray-700">{summary}</p>
    </section>
  );
};

export default PostBody;
