import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonPostCategory from './SkeletonPostCategory';

const SkeletonPost = () => {
  return (
    <div className="relative rounded bg-light-primary p-2 shadow">
      <div className="flex items-center space-x-1.5">
        <Skeleton circle width={36} height={36} />
        <Skeleton width={120} />
        <Skeleton width={100} />
      </div>
      <Skeleton height={20} className="my-2" />
      <Skeleton count={2} />
      <SkeletonPostCategory />
    </div>
  );
};

export default SkeletonPost;
