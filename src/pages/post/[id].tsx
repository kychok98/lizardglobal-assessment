import { useQuery } from '@tanstack/react-query';
import React, { Fragment, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPostById } from 'src/api/posts';
import Button from 'src/components/Button';
import Loading from 'src/components/Loading';
import PostDetails from 'src/modules/PostDetails';

const PostDetailPages = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isInitialLoading } = useQuery({
    queryKey: ['post', params.id],
    queryFn: () => getPostById(params.id as string),
    enabled: !location.state,
  });

  const post = useMemo(() => {
    // use client routing state if existed, else fallback from api
    if (location.state?.post) return location.state.post;

    return data;
  }, [data, location.state]);

  const handleBack = () => {
    // Redirect to home page if open from exact url
    // e.g. http://localhost:3000/post/146b8632-ab20-479c-a67d-3cd9f50231e8
    if (location.key === 'default') return navigate('/');
    return navigate(-1);
  };

  const renderPostDetails = () => {
    if (isInitialLoading) return <Loading />;
    return <PostDetails {...post} />;
  };

  return (
    <Fragment>
      {renderPostDetails()}
      <Button label="Back" onClick={handleBack} />
    </Fragment>
  );
};

export default PostDetailPages;
