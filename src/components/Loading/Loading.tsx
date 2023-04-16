import React from 'react';
import { CgSpinner } from 'react-icons/cg';

interface Props {
  cls?: string;
}

const Loading = ({ cls }: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CgSpinner className={`animate-spin text-2xl ${cls}`} />
    </div>
  );
};

export default Loading;
