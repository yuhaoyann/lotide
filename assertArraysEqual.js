const assertArraysEqual = function(array1, array2) {
  const eqArrays = function(array1, array2) {
    for (let i = 0; i < (array1.length + array2.length) / 2; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  let pass = String.fromCodePoint(0x1F493);
  let fail = String.fromCodePoint(0x1F4A3);
  if (eqArrays(array1, array2) === true) {
    console.log(`${pass}${pass}${pass}Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`${fail}${fail}${fail}Assertion Failed: [${array1}] !== [${array2}]`);
  }
};
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
