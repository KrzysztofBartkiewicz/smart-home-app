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

const DEVICES = [
  {
    id: uuid(),
    name: 'Fridge',
    isOn: true,
    parameters: [
      {
        name: 'Temperature',
        value: 3,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Lamp',
    isOn: true,
    parameters: [
      {
        name: 'Brightness',
        value: 65,
      },
    ],
  },
  {
    id: uuid(),
    name: 'TV',
    isOn: true,
    parameters: [
      {
        name: 'Volume',
        value: 3,
      },
    ],
  },
  {
    id: uuid(),
    name: 'Air Conditioner',
    isOn: true,
    parameters: [
      {
        name: 'Temperature',
        value: 20,
      },
      {
        name: 'Airflow',
        value: 40,
      },
    ],
  },
  {
    id: uuid(),
    name: 'CCTV Cam',
    isOn: true,
    parameters: [
      {
        name: 'Left/Right',
        value: 96.4,
      },
      {
        name: 'Up/Down',
        value: 86.2,
      },
    ],
  },
];

const App = () => {
  const [rooms, setRooms] = useState(ROOMS);
  const [devices, setDevices] = useState(DEVICES);

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
