var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while(left <= right) {
    var middle = Math.floor((left + right) / 2);
    var current = nums[middle];

    if(current < target) {
      left = middle + 1;
    } else if (current > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

// var nums = [-1,0,3,5,9,12,15];
// console.log(search(nums, 9))

// const search = (nums, target) => nums.findIndex(elem => elem === target);

// const search = (nums, target) => {
//   const median = nums[Math.floor(nums.length / 2)];
//   const medianIndex = nums.indexOf(median);

//   if(median === target) return medianIndex;
//   else if(median > target) {
//     nums.splice(0, medianIndex);
//   } else {
//     nums.splice(medianIndex)
//   }

//   return search(nums);
// }

// const search = (nums, target) => {
//   if(!nums.length >= 1) return -1;
//   // if(nums.length === 1 && nums[0] === target) return 0;
//   if(nums.length === 1 && nums[0] !== target) return -1;

//   const median = nums[Math.floor(nums.length / 2)]
//   const medianIndex = nums.indexOf(median);

//   if(median === target) return nums.length - (medianIndex + 1);
//   else if(median > target) {
//     nums = nums.slice(0, medianIndex)
//     console.log(nums)
//   } else {
//     nums = nums.slice(medianIndex + 1)
//     console.log(nums)
//   }

//   return search(nums, target);
// }

// // search(nums, 3)
// console.log(search(nums, 9))