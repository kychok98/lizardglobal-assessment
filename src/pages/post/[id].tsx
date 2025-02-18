import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPostById } from 'src/api/posts';
import Button from 'src/components/Button';
import PostDetails from 'src/modules/Posts/PostDetails';
import SkeletonPostDetails from 'src/modules/Posts/Skeletons/SkeletonPostDetails';

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

    if (!data || Object.keys(data).length === 0) return;
    return data;
  }, [data, location.state]);

  const handleBack = () => {
    // Redirect to home page if open from exact url
    // e.g. http://localhost:3000/post/146b8632-ab20-479c-a67d-3cd9f50231e8
    if (location.key === 'default') return navigate('/');
    return navigate(-1);
  };

  if (isInitialLoading || !post) return <SkeletonPostDetails />;

  return (
    <div className="relative rounded bg-light-primary p-2 shadow">
      <PostDetails {...post} />
      <Button className="ml-auto pr-1 pt-2" label="Back" onClick={handleBack} />
    </div>
  );
};

export default PostDetailPages;
