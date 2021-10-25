// const nums = [0, 1, 0, 3, 12];
// const nums = [2, 1];
const nums = [0, 0, 1, 0, 4, 2];
// const nums = [0, 0, 2, 0, 0, 1];

const moveZeroes = (nums) => {
  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
};

moveZeroes(nums);

// const moveZeroes = (nums) => {
//   nums.sort((a, b) => a - b);

//   let left = 0;
//   let right = nums.length - 1;
//   let lastZeroIndex;

//   while(left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let value = nums[mid];

//     if(value > 0) {
//       right = mid - 1;
//     } else {
//       lastZeroIndex = left;
//       left = mid + 1;
//     }
//   }

//   const zeros = nums.splice(0, lastZeroIndex + 1);
//   nums.push(...zeros)
// }

// moveZeroes(nums)
