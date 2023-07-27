function sameFrequency(nums1, nums2) {
  return sumDigits(nums1) === sumDigits(nums2) ? true : false;
}

function sumDigits(nums) {
  const numArr = nums.toString().split("");
  return numArr.reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

module.exports = { sameFrequency };
