import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({
  type,
  value,
  onChangeFn,
  isRequired,
  id,
  onKeyDownFn,
  className,
}) => {
  return (
    <StyledInput
      className={className}
      id={id}
      type={type}
      value={value}
      required={isRequired}
      onChange={onChangeFn}
      onKeyDown={onKeyDownFn}
    />
  );
};

export default Input;
