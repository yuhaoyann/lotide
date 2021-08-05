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

const eqArrays = require('./eqArrays');

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < (array1.length + array2.length) / 2; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab,ba), true);
// assertEqual(eqObjects(ab,abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);