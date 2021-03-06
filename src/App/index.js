import React, { useEffect, useState } from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';
import roomsData from '../data/rooms';
import devicesData from '../data/devices';
import useAxiosRequest from '../hooks/api/useAxiosRequest';
import url from '../helpers/urlStrings';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import changeTemp from '../utils/simulateTempChange';
import {
  addRoom,
  changeParams,
  roomToggleOn,
  toggleDeviceAddRemove,
  toggleDeviceOnOff,
} from '../utils/handleStateFunctions';

let timer;
let simTempTimer;

const App = () => {
  const [rooms, setRooms] = useState(roomsData);
  const [devices, setDevices] = useState(devicesData);
  const [user, setUser] = useState({});
  const [goToSleepTime, setGoToSleepTime] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [numbers2, setNumbers2] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { data: randomUser } = useAxiosRequest(url.randomUser);

  useEffect(() => {
    localStorage.setItem('rooms', JSON.stringify(rooms));
    simTempTimer = setInterval(() => {
      handleSimulateTemp();
    }, 60000);
    return () => clearInterval(simTempTimer);
  }, [rooms]);

  useEffect(() => {
    if (randomUser) {
      setUser({ ...randomUser.data });
    }
  }, [randomUser]);

  useEffect(() => {
    toggleStartStopTimer();
    return () => clearInterval(timer);
  }, [goToSleepTime]);

  useEffect(() => {
    stopCountdown();
  }, [countdown]);

  const handleSimulateTemp = () => {
    setRooms([...changeTemp(rooms)]);
  };

  const stopCountdown = () => {
    if (countdown === 0 && goToSleepTime !== 0) {
      clearInterval(timer);
      turnOffAllRooms();
    }
  };

  const toggleStartStopTimer = () => {
    if (goToSleepTime === 0) {
      clearInterval(timer);
      return;
    }
    timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  };

  const turnOffAllRooms = () => {
    const mappedRooms = rooms.map((room) => {
      return {
        ...room,
        isOn: false,
        devices: room.devices.map((device) => {
          return {
            ...device,
            isOn: false,
          };
        }),
      };
    });
    setRooms([...mappedRooms]);
    enqueueSnackbar('All rooms are off', { variant: 'success' });
  };

  const handleRoomToggleOn = (event, roomId) => {
    setRooms([...roomToggleOn(event, roomId, rooms)]);
    let roomName;
    rooms.forEach((room) => {
      if (room.id === roomId) {
        roomName = room.name;
      }
    });

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
    setRooms([...changeParams(newValue, deviceName, paramName, roomId, rooms)]);
  };

  const handleDeviceOnOff = (event, deviceName, roomId) => {
    setRooms([...toggleDeviceOnOff(event, deviceName, roomId, rooms)]);

    if (event.target.checked) {
      enqueueSnackbar(`${deviceName} turned on`, { variant: 'success' });
      return;
    }
    enqueueSnackbar(`${deviceName} turned off`, { variant: 'success' });
  };

  // const getRandomH = () => {
  //   axios.get(url.randomNumber).then((res) => {
  //     humidity = res.data.decimal.toFixed(0);
  //   });
  // };

  // useEffect(() => {
  //   getRandomH();
  // }, []);

  useEffect(() => {
    let promises = [];
    let numbers = [];
    for (let i = 0; i < rooms.length; i++) {
      axios
        .get(url.randomNumber)
        .then((res) => {
          console.log(i);
          console.log(res);

          console.log(res.data.decimal.toFixed(0));

          // setNumbers2([...numbers2, res.data.decimal.toFixed(0)]);
          numbers.push(res.data.decimal.toFixed(0));
        })
        .catch((error) => {
          console.log(error);
          numbers.push(10);
        });
    }

    setNumbers2(numbers);
    Promise.all(promises).then((res) => console.log(res));
    console.log(numbers, 'NUMBERS');
    console.log(numbers2, 'NUMBERS2');
  }, []);

  // useEffect(() => {
  //   let promises = [];
  //   let numbers = [];
  //   for (let i = 0; i < rooms.length; i++) {
  //     promises.push(
  //       axios
  //         .get(url.randomNumber)
  //         .then((res) => {
  //           setNumbers2([...numbers2, res.data.decimal.toFixed(0)]);
  //           numbers.push(res.data.decimal.toFixed(0));
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           numbers.push(10);
  //         })
  //     );
  //   }
  //   Promise.all(promises).then((res) => console.log(res));
  //   console.log(numbers, 'NUMBERS');
  //   console.log(numbers2, 'NUMBERS2');
  // }, []);

  const handleAddNewRoom = (data) => {
    axios
      .get(url.randomNumber)
      .then((res) => {
        setRooms((prev) => [
          ...prev,
          addRoom(data.roomName, data.membersNo, res.data),
        ]);
        enqueueSnackbar(`${data.roomName} is added`, { variant: 'success' });
      })
      .catch((error) => {
        console.log(error);
        setRooms((prev) => [...prev, addRoom(data.roomName, data.membersNo)]);
        enqueueSnackbar(
          `Api error. ${data.roomName} added with default humidity`,
          { variant: 'warning' }
        );
      });
  };

  const handleRoomDeviceAddRemove = (deviceName, roomId, operation) => {
    setRooms([
      ...toggleDeviceAddRemove(deviceName, roomId, operation, rooms, devices),
    ]);

    if (operation === 'add') {
      enqueueSnackbar(`${deviceName} added`, { variant: 'success' });
      return;
    }
    enqueueSnackbar(`${deviceName} removed`, { variant: 'success' });
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
