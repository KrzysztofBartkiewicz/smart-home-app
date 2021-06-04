import { v4 as uuid } from 'uuid';

const roomsData = [
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

export default roomsData;
