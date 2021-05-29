import React, { useState } from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';
import { v4 as uuid } from 'uuid';

const ROOMS = [
  {
    id: uuid(),
    name: 'Living Room',
    members: 3,
    devices: [],
    isOn: true,
    temp: 22,
    humidity: 50,
  },
  {
    id: uuid(),
    name: 'Bed Room',
    members: 3,
    devices: [],
    isOn: false,
    temp: 23,
    humidity: 30,
  },
  {
    id: uuid(),
    name: 'Guest Room',
    members: 2,
    devices: [],
    isOn: false,
    temp: 21,
    humidity: 45,
  },
  {
    id: uuid(),
    name: 'Kitchen',
    members: 2,
    devices: [],
    isOn: false,
    temp: 25,
    humidity: 55,
  },
  {
    id: uuid(),
    name: 'Kids Room',
    members: 3,
    devices: [],
    isOn: false,
    temp: 24,
    humidity: 37,
  },
  {
    id: uuid(),
    name: 'Balcony',
    members: 4,
    devices: [],
    isOn: false,
    temp: 15,
    humidity: 20,
  },
];

const App = () => {
  const [rooms, setRooms] = useState(ROOMS);

  const handleRoomToggleOn = (event, roomId) => {
    const mappedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          isOn: event.target.checked,
        };
      }
      return room;
    });

    setRooms([...mappedRooms]);
  };

  return (
    <AppContext.Provider value={{ rooms, handleRoomToggleOn }}>
      <GlobalStyleTemplate>
        <Router />
      </GlobalStyleTemplate>
    </AppContext.Provider>
  );
};

export default App;
