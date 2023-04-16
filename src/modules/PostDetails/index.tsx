import React from 'react';
import { formatDate } from 'src/utils';
import PostAvatar from '../Posts/Post/PostAvatar';
import PostCategory from '../Posts/Post/PostCategory';

interface Props extends IPost {}

const PostDetails = (props: Props) => {
  return (
    <div>
      <span className="text-xs text-gray-500">
        {formatDate(props.publishDate)}
      </span>

      <div className="flex flex-col space-y-2 md:space-y-3">
        <h1 className="w-full font-bold capitalize leading-6">{props.title}</h1>

        <p className="pb-1 text-sm text-gray-700">{props.summary}</p>

        <PostCategory categories={props.categories} />

        <div>
          <label className="text-xs font-bold text-primary">Author</label>
          <div className="rounded border bg-gray-100 px-1 py-1.5">
            <PostAvatar {...props.author} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
