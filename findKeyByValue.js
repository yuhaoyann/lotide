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

const findKeyByValue = function (input, value) {
  for (let i in input) {
    if (input[i] === value) {
      return i;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);