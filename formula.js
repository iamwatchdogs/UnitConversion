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
  
function convertLength(value, inputOption, outputOption) {
    const fromBaseValue = LENGHT_CONSTANT_VALUES[inputOption][outputOption];
    const toBaseValue = LENGHT_CONSTANT_VALUES[outputOption][inputOption];
    return value * fromBaseValue / toBaseValue;
}