import React from 'react';
import { formatDate } from '../../utils';

interface Props extends Author, Pick<Post, 'publishDate'> {}

const PostAvatar = ({ name, avatar, publishDate }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={avatar}
        alt={`avatar ${name}`}
        className="w-[40px] rounded-3xl border border-primary md:w-[48px]"
      />
      <span className="ml-2 flex flex-col">
        <span className="text-sm font-bold md:text-base md:leading-7">
          {name}
        </span>
        <pre className="text-xs text-gray-500">{formatDate(publishDate)}</pre>
      </span>
    </div>
  );
};

export default PostAvatar;
