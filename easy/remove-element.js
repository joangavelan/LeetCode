// const nums = [0, 1, 2, 2, 3, 0, 4, 2]
// const nums = [3, 2, 2, 3]
const nums = [4, 5]
const val = 5

const removeElement = (nums, val) => {
  let i = 0
  let last = 1

  while (i < nums.length && typeof nums[i] === 'number') {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - last]
      nums[nums.length - last] = '_'
      last++
    } else {
      i++
    }
  }

  return i
}

removeElement(nums, val)

// const removeElement = (nums, val) => {
//   let length = 0;

//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === val) {
//       nums[i] = '_'
//     } else {
//       length++
//     }
//   }

//   console.log(length)
//   console.log(nums)
//   return length;
// };

// removeElement(nums, val);
