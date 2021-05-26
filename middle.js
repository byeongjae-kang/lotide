const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  const output = [];

  if (array.length % 2 === 0 && array.length > 2) {
    output.push(array[Math.floor((array.length - 1) / 2)]);
    output.push(array[Math.ceil((array.length - 1) / 2)]);
  } else if (array.length % 2 !== 0 && array.length > 2) {
    output.push(array[(array.length - 1) / 2]);
  }
  
  return output;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]