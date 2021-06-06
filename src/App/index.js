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
import { useSnackbar } from 'notistack';
// import simulateTempChange from '../utils/simulateTempChange';

let timer;

const App = () => {
  const [rooms, setRooms] = useState(
    JSON.parse(localStorage.getItem('rooms')) || roomsData
  );
  const [devices, setDevices] = useState(devicesData);
  const [user, setUser] = useState({});
  const [goToSleepTime, setGoToSleepTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  const { enqueueSnackbar } = useSnackbar();
  const { data: randomUser } = useAxiosRequest(url.randomUser);

  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  }, [rooms]);

  useEffect(() => {
    if (randomUser) {
      setUser({ ...randomUser.data });
    }
  }, [randomUser]);

  useEffect(() => {
    if (goToSleepTime === 0) {
      clearInterval(timer);
      return;
    }
    timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [goToSleepTime]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timer);
      turnOffAllRooms();
    }
  }, [countdown]);

  const turnOffAllRooms = () => {
    const mappedRooms = rooms.map((room) => {
      return {
        ...room,
        isOn: false,
      };
    });
    setRooms([...mappedRooms]);
  };

  const handleRoomToggleOn = (event, roomId) => {
    let roomName;
    const mappedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        roomName = room.name;
        return {
          ...room,
          isOn: event.target.checked,
        };
      }
      return room;
    });

    setRooms([...mappedRooms]);
    if (event.target.checked) {
      enqueueSnackbar(`${roomName} is on`, { variant: 'success' });
      return;
    }
    enqueueSnackbar(`${roomName} is off`, { variant: 'success' });
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
    if (event.target.checked) {
      enqueueSnackbar(`${deviceName} turned on`, { variant: 'success' });
      return;
    }
    enqueueSnackbar(`${deviceName} turned off`, { variant: 'success' });
  };

  const handleAddNewRoom = (data) => {
    axios
      .get(url.randomNumber)
      .then((res) => {
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
        ]);
        enqueueSnackbar(`${data.roomName} is added`, { variant: 'success' });
      })
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
        enqueueSnackbar(
          `Api error. ${data.roomName} added with default humidity`,
          { variant: 'warning' }
        );
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
    enqueueSnackbar('Rooms removed', { variant: 'success' });
  };

  const handleTimerTimeChange = (event, newValue) => {
    setGoToSleepTime(newValue);
  };

  const handleStartStopTimer = () => {
    setCountdown(goToSleepTime);
    if (goToSleepTime !== 0) {
      enqueueSnackbar('Timer started', { variant: 'success' });
      return;
    }
    enqueueSnackbar('Timer is off', { variant: 'success' });
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        devices,
        user,
        goToSleepTime,
        handleRoomToggleOn,
        handleParamsChange,
        handleDeviceOnOff,
        handleAddNewRoom,
        handleRoomDeviceAddRemove,
        handleRoomsRemove,
        handleTimerTimeChange,
        handleStartStopTimer,
      }}
    >
      <GlobalStyleTemplate>
        <Router />
      </GlobalStyleTemplate>
    </AppContext.Provider>
  );
};

export default App;
