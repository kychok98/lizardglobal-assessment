import React from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';

const MultiSelect = ({ ...props }: ReactSelectProps) => {
  return (
    <Select
      {...props}
      isMulti
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      className={'py-2 text-xs'}
    />
  );
};

export default MultiSelect;
