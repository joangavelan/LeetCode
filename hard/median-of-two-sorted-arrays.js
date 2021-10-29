// const nums1 = [1,3]; const nums2 = [2];
// const nums1 = [1,2]; const nums2 = [3,4];
const nums1 = [3]; const nums2 = [-2, -1];

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);

  if(mergedArray.length % 2 === 0) {
    return ((mergedArray[mid - 1] + mergedArray[mid]) / 2).toFixed(5);
  } else {
    return mergedArray[mid].toFixed(5)
  }
}

findMedianSortedArrays(nums1, nums2)