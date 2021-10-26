const s = ["h","e","l","l","o"];

const reverseString = (s) => {
  let first = 0;
  let last = s.length - 1;

  while(first < last) {
    const stored = s[first];

    s[first] = s[last];
    s[last] = stored;
    
    first++;
    last--;
  }

  return s;
}

reverseString(s) // [ 'o', 'l', 'l', 'e', 'h' ]