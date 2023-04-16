import React from 'react';
import Select, { Props as ReactSelectProps } from 'react-select';

const MultiSelect = ({ ...props }: ReactSelectProps) => {
  return (
    <Select
      {...props}
      styles={{
        menu: styles => ({ ...styles, top: '80%', zIndex: 999 }),
        indicatorsContainer: styles => ({ ...styles, cursor: 'pointer' }),
      }}
      isMulti
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      className={'py-2 text-xs'}
    />
  );
};

export default MultiSelect;
