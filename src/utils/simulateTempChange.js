const simulateTempChange = (rooms) => {
  return rooms.map((room) => {
    let updatedTemp = null;
    room.devices.forEach((device) => {
      if (device.name === 'Air Conditioner') {
        device.parameters.forEach((parameter) => {
          if (parameter.name === 'Temperature') {
            updatedTemp = parameter.value;
          }
        });
      }
    });
    if (updatedTemp) {
      return {
        ...room,
        temp: updatedTemp,
      };
    }
    return room;
  });
};

export default simulateTempChange;
