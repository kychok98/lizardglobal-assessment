import React from 'react';
import { Post } from '../Posts';

interface Props extends IPost {}

const PostDetails = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Post {...props} />
    </div>
  );
};

export default PostDetails;
