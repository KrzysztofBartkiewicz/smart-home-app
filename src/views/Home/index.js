import React, { useContext } from 'react';
import List from '../../components/organisms/List';
import Room from '../../components/molecules/Room';
import AppContext from '../../context/AppContext';
import { StyledHome } from './StyledHome';

const Home = () => {
  const context = useContext(AppContext);

  return (
    <StyledHome>
      <List listArray={context.rooms} ListComponent={Room} />
    </StyledHome>
  );
};

export default Home;
