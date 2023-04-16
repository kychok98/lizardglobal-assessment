import React, { Fragment } from 'react';
import { CategoryFilter, PostList } from 'src/modules/Posts';

const PostPage = () => {
  return (
    <Fragment>
      <CategoryFilter />
      <PostList />
    </Fragment>
  );
};

export default PostPage;
