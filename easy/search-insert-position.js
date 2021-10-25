var nums = [1,3,5,6];

var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var middle_index;
  var middle_value;

  while(left <= right) {
    middle_index = Math.floor((left + right) / 2);
    middle_value = nums[middle_index];

    if(middle_value < target) {
      left = middle_index + 1;
    } else if(middle_value > target) {
      right = middle_index - 1;
    } else {
      return middle_index;
    }
  }
  
  return middle_value > target ? middle_index : middle_index + 1;
};