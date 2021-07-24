// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let pass = String.fromCodePoint(0x1F493);
  let fail = String.fromCodePoint(0x1F4A3);
  if (typeof actual === 'string' && typeof actual === typeof expected) {
    if (actual === expected) {
      console.log(`${pass}${pass}${pass}Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`${fail}${fail}${fail}Assertion Failed: "${actual}" !== "${expected}"`);
    }
  } else if (typeof actual === 'number' && typeof actual === typeof expected) {
    if (actual === expected) {
      console.log(`${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const head = function(array) {
  if (array[0]) {
    return array[0];
  } else {
    console.log(array[0]);
  }
}

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");