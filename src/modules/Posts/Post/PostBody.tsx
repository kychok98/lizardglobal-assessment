import React from 'react';

interface Props extends Pick<IPost, 'title' | 'summary'> {
  onNavigate?: () => void;
}

const PostBody = ({ title, summary, onNavigate }: Props) => {
  return (
    <section className="my-2">
      <h2
        title={title}
        className="inline-block w-full cursor-pointer truncate font-bold leading-5 hover:underline"
        onClick={onNavigate}
      >
        {title}
      </h2>
      <p className="line-clamp-2 text-sm text-gray-700">{summary}</p>
    </section>
  );
};

export default PostBody;
