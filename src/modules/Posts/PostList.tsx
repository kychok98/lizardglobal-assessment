import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Fragment, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPosts } from 'src/api/posts';
import Button from 'src/components/Button';
import useDebounce from 'src/hooks/useDebounce';
import Post from './Post';
import PostListSkeleton from './Skeletons/SkeletonPostList';

const PostList = () => {
  const [searchParams] = useSearchParams();

  const categories = useMemo(() => {
    return searchParams.getAll('category');
  }, [searchParams]);

  const debouncedCategories = useDebounce(categories);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['posts', debouncedCategories],
      queryFn: ({ pageParam }) => {
        return getPosts({ categories: debouncedCategories, cursor: pageParam });
      },
      getNextPageParam: lastPage => lastPage.next,
    });

  if (isLoading) return <PostListSkeleton />;

  if (!data?.pages.length) return <div>No data...</div>;

  return (
    <Fragment>
      {/* use for check pagination, for better aesthetic, can be removed */}
      <pre className="mb-1 ml-auto flex text-xs">
        {data.pages.reduce((acc, { count }) => acc + count, 0)} out of{' '}
        {data.pages[0]?.totalCount} Post(s)
      </pre>

      <section role="feed" className="flex flex-col gap-2 pb-2">
        {data.pages.map(page =>
          page.posts.map(post => <Post key={post.id} {...post} />)
        )}
        <Button
          isLoading={isFetchingNextPage}
          showIf={hasNextPage}
          label={'Load More'}
          onClick={() => fetchNextPage()}
        />
      </section>
    </Fragment>
  );
};

export default PostList;
