// add whatever parameters you deem necessary

// ensure the function takes in two arrays
// outputs an object based on those arrays
// first array being keys and second being values
// if not enough values sey key value to null
// if not enough key ignore remaining values

// exmaples

// easy example: [will, chloe, sam, nilo] [1,2,3,4] output: {will: 1, chloe: 2, sam: 3, nilo: 4}

// another example: [a,b,c] [1,2] output: { a: 1, b: 2, c: null}

// another example: [a,b,c] [1,2,3,4] { a: 1, b: 2, c: 3}

// initilize object

// loop over first arr
// if obj is empty
// then place key and place 2nd arr val
// if 2nd arr currval === undefined then replace null

// return object

function twoArrayObject(keys, vals) {
  let obj = {};

  for (let i = 0; i < keys.length; i++) obj[keys[i]] = vals[i] || null;

  return obj;
}

twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]); // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(["x", "y", "z"], [1, 2]); // {'x': 1, 'y': 2, 'z': null}

module.exports = { twoArrayObject };
