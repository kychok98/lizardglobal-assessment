import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonPostCategory = () => {
  return (
    <div className="mt-2 flex flex-wrap gap-1 md:gap-2">
      {Array(4)
        .fill(0)
        .map((_, idx) => {
          return <Skeleton key={idx} width={150} />;
        })}
    </div>
  );
};

export default SkeletonPostCategory;
