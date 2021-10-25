const nums = [-1, 0];
// const nums = [2, 3, 4];
// const nums = [2, 7, 11, 15];
// const nums = [1, 2, 3, 4, 4, 9, 56, 90];

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = nums.length - 1;
    let n = target - nums[i];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let c = nums[mid];

      if (c > n) right = mid - 1;
      else if (c < n) left = mid + 1;
      else if (c === n && i === mid) left = mid + 1;
      else return [i + 1, mid + 1];
    }
  }
};

console.log(twoSum(nums, -1));