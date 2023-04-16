import React, { Fragment } from 'react';
import { formatDate } from 'src/utils';

interface Props extends IAuthor, Partial<Pick<IPost, 'publishDate'>> {}

const PostAvatar = ({ name, avatar, publishDate }: Props) => {
  return (
    <div className="flex items-center space-x-1.5">
      <img
        src={avatar}
        alt={`avatar ${name}`}
        className="w-[28px] rounded-3xl border border-primary md:w-[36px]"
      />
      <span className="text-sm md:text-base md:leading-7">{name}</span>
      {publishDate && (
        <Fragment>
          <span className="h-0.5 w-0.5 rounded-full bg-gray-500" />
          <span className="text-xs text-gray-500">
            {formatDate(publishDate, 'MMM DD, YYYY')}
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default PostAvatar;
