import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the post page</h1>
      <button onClick={() => navigate(-1)}>back</button>

      <div className="flex flex-col">
        {Array(10)
          .fill(0)
          .map((_, idx) => {
            const id = Math.round(Math.random() * 40);
            return (
              <Link key={idx} to={`/post/${id}`}>
                {id}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Post;
