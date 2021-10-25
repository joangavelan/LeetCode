// var nums = [1,2,3,4,5,6,7];
var nums = [1, 2, 3];

const rotate = (nums, k) => {
  if(k > nums.length) k = k % nums.length;
  const removed = nums.splice(nums.length - k);
  nums.splice(0, 0, ...removed);
  // console.log(nums)
}

rotate(nums, 4)