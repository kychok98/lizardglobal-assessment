import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUniqueBy } from 'src/utils';

interface Props extends Pick<IPost, 'categories'> {}

const PostCategory = ({ categories }: Props) => {
  const [searchParams] = useSearchParams();

  const selectedCategories = useMemo(() => {
    return searchParams.getAll('category');
  }, [searchParams]);

  return (
    <div className="flex flex-wrap gap-1 text-xs md:gap-2">
      {getUniqueBy(categories, 'name').map(category => {
        const selected = selectedCategories.includes(category.name);
        return (
          <h5
            key={category.id}
            className={`rounded border border-neutral-600 px-1.5 py-0.5 ${
              selected
                ? 'bg-secondary font-semibold text-gray-100'
                : 'text-neutral-600'
            }`}
          >
            {category.name}
          </h5>
        );
      })}
    </div>
  );
};

export default PostCategory;
