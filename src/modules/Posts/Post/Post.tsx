import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostAvatar from './PostAvatar';
import PostBody from './PostBody';
import PostCategory from './PostCategory';

interface Props extends IPost {}

const Post = (props: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      { pathname: `/post/${props.id}` },
      { state: { post: { ...props } } }
    );
  };

  return (
    <article className="relative rounded bg-light-primary p-2 shadow">
      <PostAvatar {...props.author} publishDate={props.publishDate} />
      <PostBody
        title={props.title}
        summary={props.summary}
        onNavigate={handleNavigate}
      />
      <PostCategory categories={props.categories} />
    </article>
  );
};

export default Post;
