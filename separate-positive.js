// add whatever parameters you deem necessary

// create a function that takes in an arr
// esnure that all positive numbers are moved to the left side of the arr
// ensure all negative nums are moved to the right side

// some examples

// initial thought is to use pointers
//
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
//
// if left < 0
// move val to far right
// if right > 0
// move to left

// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < 0 && arr[right] >= 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    arr[left] > 0 ? left++ : right--;
  }

  return arr;
}

// separatePositive([5, 10, -15, 20, 25]); // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]); // [5, -5]
// separatePositive([1, 2, 3]); // [1, 2, 3]
separatePositive([2, -1, -3, 6, -8, 10]);

module.exports = { separatePositive };
