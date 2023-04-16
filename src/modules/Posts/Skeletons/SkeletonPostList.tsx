import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonPost from './SkeletonPost';

const PostSkeletonList = () => {
  return (
    <div className="flex flex-col">
      <Skeleton width={180} containerClassName={'text-right text-xs mb-1'} />
      <div className="flex flex-col gap-2 pb-2">
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return <SkeletonPost key={idx} />;
          })}
      </div>
    </div>
  );
};

export default PostSkeletonList;
