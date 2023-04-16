import React, { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostDetails from 'src/modules/PostDetails';
import Button from '../../components/Button';

const PostDetailPages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Redirect to home page if open from exact url
    // e.g. http://localhost:3000/post/146b8632-ab20-479c-a67d-3cd9f50231e8
    if (location.key === 'default') return navigate('/');
    return navigate(-1);
  };

  return (
    <Fragment>
      <PostDetails />
      <Button label="Back" onClick={handleBack} />
    </Fragment>
  );
};

export default PostDetailPages;
