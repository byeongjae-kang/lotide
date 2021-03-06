const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let index of keys1) {
    if (keys1[index] !== keys2[index]) {
      return false;
    }
  }

  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (typeof(object1[key]) === 'object') {
        if (eqObjects(object1[key], object2[key])) {
          return true;
        }
      }
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 2 }, b: 2 }), false);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

module.exports = eqObjects;
