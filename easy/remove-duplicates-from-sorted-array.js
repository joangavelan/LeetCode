// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const nums = [0, 1, 2, 2, 4, 5]

function removeDuplicates(nums) {
  let k = 1

  while (k < nums.length && typeof nums[k] === 'number') {
    if (nums[k] === nums[k - 1]) {
      for (let j = k; j < nums.length; j++) {
        if (typeof nums[j + 1] === 'number') {
          nums[j] = nums[j + 1]
        } else {
          nums[j] = '_'
          break
        }
      }
    } else {
      k++
    }
  }

  return k
}

removeDuplicates(nums)
