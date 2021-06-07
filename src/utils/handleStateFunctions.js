import { v4 as uuid } from 'uuid';

export const changeParams = (
  newValue,
  deviceName,
  paramName,
  roomId,
  rooms
) => {
  return rooms.map((room) => {
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
};

export const toggleDeviceOnOff = (event, deviceName, roomId, rooms) => {
  return rooms.map((room) => {
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
};

export const addRoom = (roomName, membersNo, randomNumber) => {
  return {
    id: uuid(),
    name: roomName,
    members: membersNo,
    devices: [],
    isOn: false,
    temp: 23,
    humidity: randomNumber ? randomNumber.decimal.toFixed(0) : 10,
  };
};

export const roomToggleOn = (event, roomId, rooms) => {
  return rooms.map((room) => {
    if (room.id === roomId) {
      return {
        ...room,
        isOn: event.target.checked,
        devices: room.devices.map((device) => {
          return {
            ...device,
            isOn: event.target.checked,
          };
        }),
      };
    }
    return room;
  });
};

export const toggleDeviceAddRemove = (
  deviceName,
  roomId,
  operation,
  rooms,
  devices
) => {
  return rooms.map((room) => {
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
          devices: room.devices.filter((device) => device.name !== deviceName),
        };
      }
    }
    return room;
  });
};
