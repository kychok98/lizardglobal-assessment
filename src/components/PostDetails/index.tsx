import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the post details page</h1>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default PostDetails;
