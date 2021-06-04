const devicesData = [
  {
    name: 'Fridge',
    isOn: true,
    icon: 'kitchen',
    parameters: [
      {
        name: 'Temperature',
        value: 3,
        min: 3,
        max: 15,
        unit: '\u2103',
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
        value: 10,
        min: 1,
        max: 100,
        unit: '',
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
        value: 3,
        min: 0,
        max: 100,
        unit: '',
      },
    ],
  },
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
  {
    name: 'CCTV Cam',
    isOn: true,
    icon: 'videocam',
    parameters: [
      {
        name: 'Left/Right',
        value: 30,
        min: 0,
        max: 90,
        unit: '\xB0',
      },
      {
        name: 'Up/Down',
        value: 86,
        min: 0,
        max: 90,
        unit: '\xB0',
      },
    ],
  },
];

export default devicesData;
