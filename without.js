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
const without = function(source, itemsToRemove) {
  let out = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
    out.push(i);
    }
  }
  return out;
}

const words = ["hello", "world", "lighthouse"];
without([1, 2, 3], [2, 3]);
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);