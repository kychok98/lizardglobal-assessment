import React from 'react';
import PostAvatar from './PostAvatar';
import PostBody from './PostBody';
import PostCategory from './PostCategory';

interface Props extends Post {}

const Post = ({
  id,
  publishDate,
  title,
  summary,
  author,
  categories,
}: Props) => {
  return (
    <article className="rounded bg-light-primary p-2 shadow">
      <PostAvatar {...author} publishDate={publishDate} />
      <PostBody id={id} title={title} summary={summary} />
      <PostCategory categories={categories} />
    </article>
  );
};

export default Post;
