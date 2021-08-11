const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(array1, array2) {
  let pass = String.fromCodePoint(0x1F493);
  let fail = String.fromCodePoint(0x1F4A3);
  if (eqArrays(array1, array2) === true) {
    console.log(`${pass}${pass}${pass}Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`${fail}${fail}${fail}Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;