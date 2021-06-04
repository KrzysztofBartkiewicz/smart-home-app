import React, { useEffect, useState } from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';
import roomsData from '../data/rooms';
import devicesData from '../data/devices';
import useAxiosRequest from '../hooks/api/useAxiosRequest';
import url from '../helpers/urlStrings';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [rooms, setRooms] = useState(roomsData);
  const [devices, setDevices] = useState(devicesData);
  const [user, setUser] = useState({});

  const { data: randomUser } = useAxiosRequest(url.randomUser);

  useEffect(() => {
    if (randomUser) {
      setUser({ ...randomUser.data });
    }
  }, [randomUser]);

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

  const handleRoomDeviceAddRemove = (deviceName, roomId, operation) => {
    const mappedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        if (operation === 'add') {
          const deviceToAdd = devices.find(
            (device) => device.name === deviceName
          );
          const newDevices = [...room.devices, deviceToAdd];

          return {
            ...room,
            devices: newDevices,
          };
        }
        if (operation === 'remove') {
          return {
            ...room,
            devices: room.devices.filter(
              (device) => device.name !== deviceName
            ),
          };
        }
      }
      return room;
    });

    setRooms([...mappedRooms]);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        devices,
        user,
        handleRoomToggleOn,
        handleParamsChange,
        handleDeviceOnOff,
        handleAddNewRoom,
        handleRoomDeviceAddRemove,
      }}
    >
      <GlobalStyleTemplate>
        <Router />
      </GlobalStyleTemplate>
    </AppContext.Provider>
  );
};

export default App;
