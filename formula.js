// ----------------------------------------
//   Declaring Unit Converting Constants 
// ----------------------------------------
const LENGHT_CONSTANT_VALUES = {
    meter: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      micrometer: 1e6,
      nanometer: 1e9,
      mile: 0.000621371,
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.3701,
      'light-year': 1.057e-16
    },
    kilometer: {
      meter: 1000,
      kilometer: 1,
      centimeter: 100000,
      millimeter: 1e6,
      micrometer: 1e9,
      nanometer: 1e12,
      mile: 0.621371,
      yard: 1093.61,
      foot: 3280.84,
      inch: 39370.1,
      'light-year': 1.057e-13
    },
    centimeter: {
      meter: 0.01,
      kilometer: 0.00001,
      centimeter: 1,
      millimeter: 10,
      micrometer: 1e4,
      nanometer: 1e7,
      mile: 6.2137e-6,
      yard: 0.0109361,
      foot: 0.0328084,
      inch: 0.393701,
      'light-year': 1.057e-18
    },
    millimeter: {
      meter: 0.001,
      kilometer: 0.000001,
      centimeter: 0.1,
      millimeter: 1,
      micrometer: 1000,
      nanometer: 1e6,
      mile: 6.2137e-7,
      yard: 0.00109361,
      foot: 0.00328084,
      inch: 0.0393701,
      'light-year': 1.057e-19
    },
    micrometer: {
      meter: 0.000001,
      kilometer: 9.9999e-10,
      centimeter: 0.0001,
      millimeter: 0.001,
      micrometer: 1,
      nanometer: 1000,
      mile: 6.2136e-10,
      yard: 0.00000109,
      foot: 0.00000328,
      inch: 0.00003937,
      'light-year': 1.057e-22
    },
    nanometer: {
      meter: 1.e-9,
      kilometer: 1.e-12,
      centimeter: 1.e-7,
      millimeter: 0.000001,
      micrometer: 0.001,
      nanometer: 1,
      mile: 6.2136e-13,
      yard: 1.0936e-9,
      foot: 3.2808e-9,
      inch: 3.9370e-8,
      'light-year': 1.0570e-25
    },
    mile: {
      meter: 1609.35,
      kilometer: 1.60935,
      centimeter: 160935,
      millimeter: 1609350,
      micrometer: 1609350000,
      nanometer: 160935e+7,
      mile: 1,
      yard: 1760.0065617,
      foot: 5280.019685,
      inch: 63360.23622,
      'light-year': 1.7010e-13
    },
    yard: {
      meter: 0.9144,
      kilometer: 0.0009144,
      centimeter: 91.44,
      millimeter: 914.4,
      micrometer: 914400,
      nanometer: 9144e+5,
      mile: 0.0005681797,
      yard: 1,
      foot: 3,
      inch: 36,
      'light-year': 9.6652e-17
    },
    foot: {
      meter: 0.3048,
      kilometer: 0.0003048,
      centimeter: 30.48,
      millimeter: 304.8,
      micrometer: 304800,
      nanometer: 3048e5,
      mile: 0.0001893932,
      yard: 0.33333,
      foot: 1,
      inch: 12,
      'light-year': 3.2217e-17
    },
    inch: {
      meter: 0.0254,
      kilometer: 0.0000254,
      centimeter: 2.54,
      millimeter: 25.4,
      micrometer: 25400,
      nanometer: 2540e+4,
      mile: 0.0000157828,
      yard: 0.0277777778,
      foot: 0.0833333333,
      inch: 1,
      'light-year': 2.6848e-18
    },
    'light-year': {
      meter: 9460660e9,
      kilometer: 9460660e6,
      centimeter: 9460660e+11,
      millimeter: 9460660e+12,
      micrometer: 9.46066e+21,
      nanometer: 9.4606e+24,
      mile: 5878559666946,
      yard: 10346303587051618,
      foot: 31038910761154856,
      inch: 372466929133858300,
      'light-year': 1
    }
};

const TEMP_CONSTANT_VALUES = {
    celsius: {
        celsius: 1,
        fahrenheit: 33.8,
        kelvin: 274.15
    },
    fahrenheit: {
        celsius: -17.2222,
        fahrenheit: 1,
        kelvin: 255.928
    },
    kelvin: {
        celsius: -272.15,
        fahrenheit: -457.87,
        kelvin: 1
    }
};

const AREA_CONSTANT_VALUES = {
    'square-meter': {
        'square-meter': 1,
        'square-kilometer': 1e-6,
        'square-centimeter': 1e4,
        'square-millimeter': 1e6,
        'square-micrometer': 1e12,
        'hectare': 0.0001,
        'square-mile': 3.861e-7,
        'square-yard': 1.196,
        'square-foot': 10.764,
        'square-inch': 1550,
        'acre': 0.0002471054
    },
    'square-kilometer': {
        'square-meter': 1e6,
        'square-kilometer': 1,
        'square-centimeter': 1e10,
        'square-millimeter': 1e12,
        'square-micrometer': 1e18,
        'hectare': 100,
        'square-mile': 0.386102,
        'square-yard': 1.196e6,
        'square-foot': 1.076e7,
        'square-inch': 1.55e9,
        'acre': 247.105
    },
    'square-centimeter': {
        'square-meter': 1e-4,
        'square-kilometer': 1e-10,
        'square-centimeter': 1,
        'square-millimeter': 100,
        'square-micrometer': 1e8,
        'hectare': 1e-8,
        'square-mile': 3.861e-11,
        'square-yard': 0.000119599,
        'square-foot': 0.00107639,
        'square-inch': 0.155,
        'acre': 2.4711e-8
    },
    'square-millimeter': {
        'square-meter': 1e-6,
        'square-kilometer': 1e-12,
        'square-centimeter': 0.01,
        'square-millimeter': 1,
        'square-micrometer': 1e6,
        'hectare': 1e-10,
        'square-mile': 3.861e-13,
        'square-yard': 1.196e-6,
        'square-foot': 1.076e-5,
        'square-inch': 0.00155,
        'acre': 2.4711e-10
    },
    'square-micrometer': {
        'square-meter': 1e-12,
        'square-kilometer': 1e-18,
        'square-centimeter': 1e-8,
        'square-millimeter': 1e-6,
        'square-micrometer': 1,
        'hectare': 1e-16,
        'square-mile': 3.861e-19,
        'square-yard': 1.196e-12,
        'square-foot': 1.076e-11,
        'square-inch': 1.55e-9,
        'acre': 2.4711e-16
    },
    'hectare': {
        'square-meter': 10000,
        'square-kilometer': 0.01,
        'square-centimeter': 1e8,
        'square-millimeter': 1e10,
        'square-micrometer': 1e16,
        'hectare': 1,
        'square-mile': 0.00386102,
        'square-yard': 11959.9,
        'square-foot': 107639,
        'square-inch': 1.55e7,
        'acre': 2.47105
    },
    'square-mile': {
        'square-meter': 2.59e6,
        'square-kilometer': 2.58999,
        'square-centimeter': 2.59e10,
        'square-millimeter': 2.59e12,
        'square-micrometer': 2.59e18,
        'hectare': 258.999,
        'square-mile': 1,
        'square-yard': 3.098e6,
        'square-foot': 2.788e7,
        'square-inch': 4.014e9,
        'acre': 640
    },
    'square-yard': {
        'square-meter': 0.836127,
        'square-kilometer': 8.3613e-7,
        'square-centimeter': 8361.27,
        'square-millimeter': 836127,
        'square-micrometer': 8.3613e11,
        'hectare': 8.3613e-5,
        'square-mile': 3.2283e-7,
        'square-yard': 1,
        'square-foot': 9,
        'square-inch': 1296,
        'acre': 0.000206612
    },
    'square-foot': {
        'square-meter': 0.092903,
        'square-kilometer': 9.2903e-8,
        'square-centimeter': 929.03,
        'square-millimeter': 92903,
        'square-micrometer': 9.2903e10,
        'hectare': 9.2903e-6,
        'square-mile': 3.587e-8,
        'square-yard': 0.111111,
        'square-foot': 1,
        'square-inch': 144,
        'acre': 2.2957e-5
    },
    'square-inch': {
        'square-meter': 0.00064516,
        'square-kilometer': 6.4516e-10,
        'square-centimeter': 6.4516,
        'square-millimeter': 645.16,
        'square-micrometer': 6.4516e8,
        'hectare': 6.4516e-8,
        'square-mile': 2.491e-10,
        'square-yard': 0.000771605,
        'square-foot': 0.00694444,
        'square-inch': 1,
        'acre': 1.5942e-7
    },
    'acre': {
        'square-meter': 4046.86,
        'square-kilometer': 0.00404686,
        'square-centimeter': 4.0469e7,
        'square-millimeter': 4.0469e9,
        'square-micrometer': 4.0469e15,
        'hectare': 0.404686,
        'square-mile': 0.0015625,
        'square-yard': 4840,
        'square-foot': 43560,
        'square-inch': 6.273e6,
        'acre': 1
    }
};
  
// ----------------------------------------
//         Unit Converting Logic 
// ----------------------------------------
function convertLength(value, inputOption, outputOption) {
    const fromBaseValue = LENGHT_CONSTANT_VALUES[inputOption][outputOption];
    const toBaseValue = LENGHT_CONSTANT_VALUES[outputOption][inputOption];
    return value * fromBaseValue / toBaseValue;
}

function convertTemp(value, inputOption, outputOption) {
    const fromBaseValue = TEMP_CONSTANT_VALUES[inputOption][outputOption];
    const toBaseValue = TEMP_CONSTANT_VALUES[outputOption][inputOption];
    return value * fromBaseValue / toBaseValue;
}

function convertArea(value, inputOption, outputOption) {
    const fromBaseValue = AREA_CONSTANT_VALUES[inputOption][outputOption];
    const toBaseValue = AREA_CONSTANT_VALUES[outputOption][inputOption];
    return value * fromBaseValue / toBaseValue;
}