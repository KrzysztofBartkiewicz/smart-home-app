import React from 'react';
import { StyledList } from './StyledList';

const List = ({ listType, listArray, ListComponent }) => {
  return (
    <StyledList listType={listType}>
      {listArray.map((item) => (
        <li key={item.key}>
          <ListComponent {...item} />
        </li>
      ))}
    </StyledList>
  );
};

export default List;
