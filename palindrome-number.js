const isPalindrome = (n) => reverse(n) === n;

function reverse(n) {
  if(n >= 0) {
    var temp = 0;
    while (n) {
      temp *= 10;
      temp += n % 10;
      n = Math.floor(n / 10);
    }
    return temp;
  }
  return false;
}