import { v4 as uuid } from 'uuid';

const roomsData = [
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
            value: 23,
            min: 16,
            max: 28,
            unit: '\u2103',
          },
          {
            name: 'Airflow',
            value: 7,
            min: 1,
            max: 10,
            unit: '',
          },
        ],
      },
    ],
    isOn: true,
    temp: 15,
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
