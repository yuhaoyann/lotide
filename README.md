# Lotide Notes
## Summary
This repository contains the [lotide](https://github.com/yuhaoyann/lotide) project which built a mini library  for the Lighthouse Labs Web Development Bootcamp.
## Table of Contents
* [assertEqual](/assertEqual.js)
  * compare the two values it takes in and print out a message telling us if they match or not
* [head](/head.js)
  * returns the first item in the array
* [tail](/tail.js)
  * returns the "tail" of an array: everything except for the first item (head) of the provided array
* [eqArrays](eqArrays.js)
  * takes in two arrays and returns true or false, based on a perfect match
* [assertArraysEqual](/assertArraysEqual.js)
  * take in two arrays and console.log an appropriate message to the console
* [without](/without.js)
  * return a subset of a given array, removing unwanted elements
* [flatten](/flatten.js)
  * take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* [middle](/middle.js)
  * take in an array and return the middle-most element(s) of the given array
* [countOnly](/countOnly.js)
  * be given an array and an object. It will return an object containing counts of everything that the input object listed
* [countLetters](/countLetters.js)
  * take in a sentence (as a string) and then return a count of each of the letters in that sentence
* [letterPositions](/letterPositions.js)
  * return all the indices (zero-based positions) in the string where each character is found
* [findKeyByValue](/findKeyByValue.js)
  * takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
* [eqObjects](/eqObjects.js)
  * take in two objects and returns true or false, based on a perfect match
* [assertObjectsEqual](/assertObjectsEqual.js)
  * take in two objects and console.log an appropriate message to the console
* [map](/map.js)
  * take in two arguments:
    1. An array to map
    2. A callback function
  * The map function will return a new array based on the results of the callback function
* [takeUntil](/takeUntil.js)
  * take in two parameters:
    1. The array to work with
    2. The callback (which Lodash calls "predicate")
  * The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value
* [findKey](/findKey.js)
  * takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
