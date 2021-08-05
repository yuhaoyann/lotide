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
const assertEqual = require(`./assertEqual`);

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);