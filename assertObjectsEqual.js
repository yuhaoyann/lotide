// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < (array1.length + array2.length) / 2; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
const eqObjects = require('./eqObjects');

// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length === Object.keys(object2).length) {
//     for (let key in object1) {
//       if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//         if (!eqArrays(object1[key], object2[key])) {
//           return false;
//         }
//       } else if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let pass = String.fromCodePoint(0x1F493);
  let fail = String.fromCodePoint(0x1F4A3);
  if (eqObjects(actual, expected) === true) {
    console.log(`${pass}${pass}${pass}Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`${fail}${fail}${fail}Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab,ba);
// assertObjectsEqual(ab,abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);