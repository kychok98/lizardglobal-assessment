import React from 'react';
import { getUniqueBy } from 'src/utils';

interface Props extends Pick<Post, 'categories'> {}

const PostCategory = ({ categories }: Props) => {
  return (
    <div className="flex flex-wrap gap-1 text-xs md:gap-2">
      {getUniqueBy(categories, 'name').map(category => {
        return (
          <h5
            key={category.id}
            className={`rounded-lg border border-neutral-600 px-1.5 py-0.5 text-neutral-600`}
          >
            {category.name}
          </h5>
        );
      })}
    </div>
  );
};

export default PostCategory;
