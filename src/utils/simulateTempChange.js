const changeTemp = (rooms) => {
  const mappedRooms = rooms.map((room) => {
    let adjustedTemp = null;
    let targetTemp = null;

    room.devices.forEach((device) => {
      if (device.name === 'Air Conditioner') {
        device.parameters.forEach((parameter) => {
          if (parameter.name === 'Temperature' && device.isOn) {
            adjustedTemp = parameter.value;
          }
        });
      }
    });

    if (adjustedTemp) {
      if (room.temp > adjustedTemp) {
        targetTemp = room.temp - 1;
      } else if (room.temp < adjustedTemp) {
        targetTemp = room.temp + 1;
      } else {
        targetTemp = room.temp;
      }

      return {
        ...room,
        temp: targetTemp,
      };
    }

    return room;
  });

  return mappedRooms;
};

export default changeTemp;
