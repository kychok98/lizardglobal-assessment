import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import Button from 'src/components/Button';
import { CategoryFilter, PostList } from 'src/modules/Posts';

const PostPage = () => {
  const renderBackToTop = () => {
    const handleBackToTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return (
      <div className="absolute bottom-[100px] right-[40px]">
        <Button
          className="fixed px-0 opacity-60 hover:opacity-100"
          onClick={handleBackToTop}
        >
          <FaAngleUp className="text-3xl" />
        </Button>
      </div>
    );
  };

  return (
    <div className="relative flex h-full flex-col">
      <CategoryFilter />
      <PostList />

      {renderBackToTop()}
    </div>
  );
};

export default PostPage;
