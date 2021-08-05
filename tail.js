// const assertEqual = function(actual, expected) {
//   let pass = String.fromCodePoint(0x1F493);
//   let fail = String.fromCodePoint(0x1F4A3);
//   if (typeof actual === 'string' && typeof actual === typeof expected) {
//     if (actual === expected) {
//       console.log(`${pass}${pass}${pass}Assertion Passed: "${actual}" === "${expected}"`);
//     } else {
//       console.log(`${fail}${fail}${fail}Assertion Failed: "${actual}" !== "${expected}"`);
//     }
//   } else {
//     if (actual === expected) {
//       console.log(`${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`);
//     }
//   }
// };

const assertEqual = require('./assertEqual');

const tail = function(array) {
  let out = [];
  for (let i = 1; i < array.length; i++) {
    out.push(array[i]);
  }
  return out;
};

assertEqual(tail([]), 5);