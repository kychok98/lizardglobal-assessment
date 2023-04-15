import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPosts } from 'src/api/posts';
import Loading from 'src/components/Loading';
import useDebounce from 'src/hooks/useDebounce';
import Post from './Post';

const PostList = () => {
  const [searchParams] = useSearchParams();

  const categories = useMemo(() => {
    return searchParams.getAll('category');
  }, [searchParams]);

  const debouncedCategories = useDebounce(categories);

  const { data, isLoading } = useQuery({
    queryKey: ['posts', debouncedCategories],
    queryFn: () => getPosts({ categories: debouncedCategories }),
  });

  if (isLoading) return <Loading />;

  if (!data?.posts) return <div>No data...</div>;

  return (
    <section className="flex flex-col gap-2">
      {data.count} Records
      {data.posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default PostList;
