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
    devices: [
      {
        name: 'Air Conditioner',
        isOn: true,
        icon: 'ac_unit',
        parameters: [
          {
            name: 'Temperature',
            value: 30,
          },
          {
            name: 'Airflow',
            value: 20,
          },
        ],
      },
      {
        name: 'TV',
        isOn: true,
        icon: 'tv',
        parameters: [
          {
            name: 'Volume',
            value: 5,
          },
        ],
      },
      {
        name: 'Lamp',
        isOn: true,
        icon: 'light',
        parameters: [
          {
            name: 'Brightness',
            value: 5,
          },
        ],
      },
    ],
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
    devices: [
      {
        name: 'Fridge',
        isOn: true,
        icon: 'kitchen',
        parameters: [{ name: 'Temperature', value: 30 }],
      },
      {
        name: 'Air Conditioner',
        isOn: true,
        icon: 'ac_unit',
        parameters: [
          {
            name: 'Temperature',
            value: 30,
          },
          {
            name: 'Airflow',
            value: 20,
          },
        ],
      },
    ],
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
    name: 'Fridge',
    isOn: true,
    icon: 'kitchen',
    parameters: {
      Temperature: 3,
    },
  },
  {
    name: 'Lamp',
    isOn: true,
    icon: 'light',
    parameters: {
      Brightness: 65,
    },
  },
  {
    name: 'TV',
    isOn: true,
    icon: 'tv',
    parameters: {
      Volume: 3,
    },
  },
  {
    name: 'Air Conditioner',
    isOn: true,
    icon: 'ac_unit',
    parameters: {
      Temperature: 20,
      Airflow: 40,
    },
  },
  {
    name: 'CCTV Cam',
    isOn: true,
    icon: 'videocam',
    parameters: {
      'Left/Right': 96.4,
      'Up/Down': 86.2,
    },
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

  const handleParamsChange = (
    event,
    newValue,
    deviceName,
    paramName,
    roomId
  ) => {
    const mappedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          devices: room.devices.map((device) => {
            if (device.name === deviceName) {
              return {
                ...device,
                parameters: device.parameters.map((parameter) => {
                  if (parameter.name === paramName) {
                    return {
                      ...parameter,
                      value: newValue,
                    };
                  }
                  return parameter;
                }),
              };
            }
            return device;
          }),
        };
      }
      return room;
    });

    setRooms([...mappedRooms]);
  };

  const handleDeviceOnOff = (event, deviceName, roomId) => {
    const mappedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          devices: room.devices.map((device) => {
            if (device.name === deviceName) {
              return {
                ...device,
                isOn: event.target.checked,
              };
            }
            return device;
          }),
        };
      }
      return room;
    });

    setRooms([...mappedRooms]);
  };

  const handleAddNewRoom = (data) => {
    setRooms((prev) => [
      ...prev,
      {
        id: uuid(),
        name: data.roomName,
        members: data.membersNo,
        devices: [],
        isOn: false,
        temp: 23,
        humidity: 30,
      },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        handleRoomToggleOn,
        handleParamsChange,
        handleDeviceOnOff,
        handleAddNewRoom,
      }}
    >
      <GlobalStyleTemplate>
        <Router />
      </GlobalStyleTemplate>
    </AppContext.Provider>
  );
};

export default App;
