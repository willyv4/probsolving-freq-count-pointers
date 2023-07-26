// add whatever parameters you deem necessary

// ensure that two numbers eqaul the target(average)
// if we find two numbers that eqaul that target return true
// if not we will return false

// we have two inputs array of numbers and a target
// we are return a boolean value

// couple of examples

// [1,3,5,7,9], 8 return true

//0:    1 + 9 = 10 / 2 = 5
//1:    3 + 9 = 12 / 2 = 6
//2:    5 + 9 = 14 / 2 = 7
//3:    7 + 9 = 16 / 2 = 8 = 8 return true

// [1,5,6,7,10,13], 8.5 return true

//0:    1 + 13 = 14 / 2 = 7
//1:    5 + 13 = 18 / 2 = 9
// if average greater than target right -- left--
// 2:  5 + 10 = 15 / 2 = 7.5
// 3:  6 + 10 = 16 / 2 = 8
// 4:  7 + 10 = 17 / 2 = 8.5 return true

// [1, 3, 3, 5, 6, 7, 10, 12, 19], 8

//0: 1 + 19 = 20 / 2 = 10
// if average greater than target right -- left--
//1: 3 + 12 = 15 / 2 = 7.5
//3: 5 + 12 = 17 / 2 = 8.5
// if average greater than target right -- left--
//4: 5 + 10 = 15 / 2 = 7.5
//5: 6 + 10 = 16 / 2 = 8 return true

// [1,5,7,9,10,12] 2.7 return false

// create a left pointer
// create a right pointer

// make a while loop the checks if left is less than right
// if average greater than target r--
// calc average left + right / 2
// check if left and right eqaul target if not

// check if left is less than target
// if it is left++

function averagePair(nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx < rightIdx) {
    const average = nums[leftIdx] + nums[rightIdx] / 2;

    if (average === target) return true;
    average > target ? rightIdx-- : leftIdx++;
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
module.exports = { averagePair };
