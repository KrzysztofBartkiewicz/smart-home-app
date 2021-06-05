import React, { useContext } from 'react';
import List from '../../components/organisms/List';
import Room from '../../components/molecules/Room';
import AppContext from '../../context/AppContext';
import {
  StyledHome,
  StyledUser,
  StyledUserAvatar,
  StyledUserInvitation,
  StyledUserName,
} from './StyledHome';

const Home = () => {
  const { rooms, user } = useContext(AppContext);

  return (
    <StyledHome>
      <StyledUser>
        <StyledUserAvatar src={user.avatar} />
        <StyledUserName headingType="h1">Hi {user.first_name}</StyledUserName>
        <StyledUserInvitation>Welcome in Home</StyledUserInvitation>
      </StyledUser>
      <List listType="rooms" listArray={rooms} component={<Room />} />
    </StyledHome>
  );
};

export default Home;
