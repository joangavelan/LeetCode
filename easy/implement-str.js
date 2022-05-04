const haystack = 'hello'
const needle = 'lo'

const strStr = (haystack, needle) => {
  const length = haystack.length - needle.length + 1;

  for(let i = 0; i < length; i++) {
    let occurrence = '';

    for(let j = 0; j < needle.length; j++) {
      occurrence += haystack[i + j];
    }

    if(occurrence === needle) return i
  }

  return needle.length ? - 1 : 0;
}