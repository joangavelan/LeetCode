const longestCommonPrefix = (strs) => strs.reduce((a, b) => {
  let length = Math.min(a.length, b.length);
  let prefix = "";

  for(let i = 0; i < length; i++) {
    if(a[i] === b[i]) prefix += a[i];
    else return prefix;
  }

  return prefix;
});

// const longestCommonPrefix = strs => {
//   if(strs.length === 1) return strs[0];

//   let prefix = "";

//   for(let i = 1; i < strs.length; i++) {
//     let length = Math.max(strs[i].length, strs[i - 1].length);
//     let currentPrefix = "";

//     for(let j = 0; j < length; j++) {
//       if(strs[i][j] === strs[i - 1][j]) {
//         currentPrefix += strs[i][j];
//       } else break;
//     }

//     if(!currentPrefix) return prefix;
//     if(!prefix && currentPrefix) prefix = currentPrefix;
//     if(prefix && prefix !== currentPrefix) return longestCommonPrefix([prefix, currentPrefix]);
//   }
//   return prefix;
// }

// console.log(longestCommonPrefix(["flight", "flow", "flower"]))


// const longestCommonPrefix = (strs) => {
//   if(strs.length === 1) return strs[0];

//   let prefix = "";

//   for(let i = 1; i < strs.length; i++) {
//     prefix = findCommonPrefix(strs[i], strs[i - 1]);
//   }
//   return prefix;
// };

// const findCommonPrefix = (str1, str2) => {
//   const length = Math.min(str1.length, str2.length);
//   let prefix = "";

//   for(let i = 0; i < length; i++) {
//     if(str1[i] === str2[i]) prefix += str1[i];
//     else return prefix;
//   }
//   return prefix;
// }

// console.log(longestCommonPrefix(["reflower", "flow", "flight"]))

// const longestCommonPrefix = (strs) => {
//   let prefix = "";

//   for(let i = 1; i < strs.length; i++) {
//     let length = Math.max(strs[i].length, strs[i - 1].length);
//     let currentPrefix = 

//     for(let j = 0; j < length; j++) {
//       if(strs[i][j] === strs[i - 1][j]) prefix += str1[i];
//     }
//   }
//   return prefix;
// };

// function findCommonPrefix(str1, str2) {
//   const length = Math.max(str1.length, str2.length);
//   let prefix = "";

//   for(let i = 0; i < length; i++) {
//     if(str1[i] === str2[i]) prefix += str1[i];
//     else return prefix;
//   }
// }