// add whatever parameters you deem necessary

// input an array of numbers and a target
// output number of pairs

// example 1: 12345 6

// 1: 1 + 5 = 6 pair++
// 1: 1 + 4 = 5 left ++
// 1: 2 + 4 = 6 pair++
// 1: 3 + 4 = 7 left < right terminatw

// example 2: 0,2,4,6,8,10 10

// 1: 0 + 10 = 10 pair++
// 2: 0 + 8 = 8, 8 < target left++
// 3: 2 + 8 = 10 pair++ 
// 4: 2 + 6 = 8 8 < target left ++
// 5: 4 + 6 = 10 pair ++

// 31542 , 6

// 1: 3 + 2 = 5 
// 2: 3 + 4 = 7 
// 3: 3 + 5 = 8 
// 4: 3 + 1 = 4
// if left + 1 = right left++ right lenght - 1
// 5: 1+2 = 3
// 6: 1 + 4 = 5
// 7: 1 + 5 = 6 pair ++ // check first then // if left + 1 = right left++ right lenght - 1
// 8: 5 + 2 = 7
// 9: 5 + 4 = 9 // check first then // if left + 1 = right left++ right lenght - 1
// 10: 4+2 = 6 pair++,  left++ 
// while lef <= arr.length - 1 terminate


// function countPairs(arr, target) {
// 	let pairCount = 0
// 	let left = 0
// 	let right = arr.length - 1 

// 	while (left < arr.length - 1) {
// 		const sum = arr[left] + arr[right];

//     	if (sum === target) pairCount++;
    
// 		if (left + 1 === right) {
//       		left++;
//       		right = arr.length - 1;
//     	} else {
//       		right--;
//     	}

//     	if (left >= right) {
//       		left++;
//       		right = arr.length - 1;
//     	}
// 	}

// 	return pairCount
// }

function countPairs(arr, target) {
  let pairCount = 0;
  const seenNumbers = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seenNumbers.has(complement)) pairCount++;
    seenNumbers.add(num);
  }

  return pairCount;
}



module.exports = { countPairs }
