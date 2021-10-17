var solution = function(isBadVersion) {
  return function (n) {
    var left = 0;
    var right = n;
    var result = n;

    while(left <= right) {
      var middle = Math.floor((left + right) / 2);

      if(isBadVersion(mid)) {
        result = mid;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return result;
  }
};