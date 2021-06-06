import React from 'react';
import { StyledList, StyledListItem } from './StyledList';

const List = ({ listType, listArray, component, classList }) => {
  return (
    <StyledList classList={classList} listType={listType}>
      {listArray.map((item) => (
        <StyledListItem listType={listType} key={item.id}>
          {React.cloneElement(component, { ...item })}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
