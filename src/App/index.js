import React, { useEffect, useState } from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';
import roomsData from '../data/rooms';
import devicesData from '../data/devices';
import useAxiosRequest from '../hooks/api/useAxiosRequest';
import url from '../helpers/urlStrings';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
// import simulateTempChange from '../utils/simulateTempChange';

const App = () => {
  const [rooms, setRooms] = useState(
    JSON.parse(localStorage.getItem('rooms')) || roomsData
  );
  const [devices, setDevices] = useState(devicesData);
  const [user, setUser] = useState({});

  const { data: randomUser } = useAxiosRequest(url.randomUser);

  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  }, [rooms]);

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
    axios
      .get(url.randomNumber)
      .then((res) =>
        setRooms((prev) => [
          ...prev,
          {
            id: uuid(),
            name: data.roomName,
            members: data.membersNo,
            devices: [],
            isOn: false,
            temp: 23,
            humidity: res.data.decimal.toFixed(0),
          },
        ])
      )
      .catch((error) => {
        console.log(error);
        setRooms((prev) => [
          ...prev,
          {
            id: uuid(),
            name: data.roomName,
            members: data.membersNo,
            devices: [],
            isOn: false,
            temp: 23,
            humidity: 10,
          },
        ]);
      });
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

  const handleRoomsRemove = (roomsIdsArr) => {
    const filteredRooms = rooms.filter((room) =>
      roomsIdsArr.every((id) => id !== room.id)
    );
    setRooms([...filteredRooms]);
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
        handleRoomsRemove,
      }}
    >
      <GlobalStyleTemplate>
        <Router />
      </GlobalStyleTemplate>
    </AppContext.Provider>
  );
};

export default App;
