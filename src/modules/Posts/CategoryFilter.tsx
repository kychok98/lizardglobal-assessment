import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPostCategories } from 'src/api/posts';
import { MultiSelect } from 'src/components/CustomSelect';
import { OptionsOrGroups } from 'react-select/dist/declarations/src/types';
import { useSearchParams } from 'react-router-dom';

type Option = { label: string; value: string };

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: categories, isLoading } = useQuery({
    queryKey: ['postCategories'],
    queryFn: () => getPostCategories(),
  });

  const options: OptionsOrGroups<Option, any> = useMemo(() => {
    if (!categories) return [];

    return categories.map(category => ({ value: category, label: category }));
  }, [categories]);

  const selectedValue = options.filter(o =>
    searchParams.getAll('category').includes(o.value)
  );

  return (
    <MultiSelect
      value={selectedValue}
      isDisabled={isLoading}
      isLoading={isLoading}
      options={options}
      onChange={e => {
        const category = (e as any).map(({ value }) => value);
        setSearchParams({ category });
      }}
    />
  );
};

export default CategoryFilter;
