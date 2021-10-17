var nums = [-4,-1,0,3,10];

const sortedSquares = (nums) => nums.map(num => num * num).sort((a, b) => a - b); 

// var sortedSquares = function(nums) {
//   var squaredArr = nums.map(num => num * num);
//   var sortedArr = squaredArr.sort((a, b) => a - b);
//   return sortedArr;
// };

console.log(sortedSquares(nums));