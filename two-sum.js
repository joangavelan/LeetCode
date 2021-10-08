const nums = [2, 3, 1, 5, 4, 2];

const twoSum = (nums, target) => {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (i !== j) {
      if (nums[i] + nums[j] === target) return [i, j];
    }

    j++;

    if (j === nums.length) {
      j = 0;
      i++;
    }
  }
};

console.log(twoSum(nums, 8));