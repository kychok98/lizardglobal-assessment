import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonPostCategory from './SkeletonPostCategory';

const PostSkeleton = () => {
  return (
    <div className="relative rounded bg-light-primary p-2 shadow">
      <Skeleton width={180} className="text-xs" />

      <div className="flex flex-col space-y-2 md:space-y-3">
        <Skeleton />
        <Skeleton count={2} className="text-sm" />

        <SkeletonPostCategory />

        <div>
          <Skeleton className="text-sm" width={40} />
          <Skeleton height={40} />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
