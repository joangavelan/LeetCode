const s1 = '()' // true
const s2 = '()[]{}' // true
const s3 = '(]' // false
const s4 = '([])' // true
const s5 = '{()[]}' // true
const s6 = '((' // false
const s7 = '[(]{])}' // false

function isValid(s) {
  
}

// const getClosingPar = (p) => {
//   if (p === '(') return ')'
//   if (p === '{') return '}'
//   if (p === '[') return ']'
// }

// function isValid(s) {
//   let level = 0;
//   let validClosing = [];

//   for(let i = 0; i < s.length; i++) {
//     if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
//       level++;
//       validClosing.push({p: getClosingPar(s[i]), level})
//     } else {
//       const index = validClosing.findIndex(el => {
//         return el.p === s[i] && el.level === level
//       })
//       if(index === -1) return false;
//       validClosing.splice(index, 1);
//       level--;
//     }
//   }
//   return !validClosing.length > 0;
// }

// console.log(isValid('['))

// const isEven = (x) => x % 2 === 0

// function isValid(s) {
//   const pendingClosing = []

//   for(let i = 0; i < s.length; i++) {
//     if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//       pendingClosing.push({ p: getClosingPar(s[i]), even: !isEven(i) })
//     } else {
//       const index = pendingClosing.findIndex((valid) => valid.p === s[i] && valid.even === isEven(i))
//       if(index === -1) return false;
//       pendingClosing.splice(index, 1)
//     }
//   }

//   return !pendingClosing.length > 0
// }

// console.log(isValid('{{[]}}'))
// console.log(isValid('({[)'))
// isValid('(](')

// // const s = "()[]{}";
// // const s = "([)]";
// const s = "{[]}";
// // const s = "{[()]{{}}}"

// const isOpeningParen = (p) => ['{', '(', '['].some(el => el === p);
// const closingParenOf = (p) => {
//   switch(p) {
//     case '{':
//       return '}'
//     case '(':
//       return ')'
//     case '[':
//       return ']'
//   }
// }
// const oddOrEven = (n) => n % 2 === 0 ? 'odd' : 'even';

// const isValid = (s) => {
//   const closeParensToFind = [];

//   [...s].forEach((p, i) => {
//     const pObj = {type: p, pairing: oddOrEven(i)};

//     if(isOpeningParen(pObj.type)) {
//       closeParensToFind.push(pObj)}
//     // } else {
//     //   const found = closeParensToFind.find(obj => obj === pObj);
//     //   if(found) closeParensToFind.splice(closeParensToFind.indexOf(found), 1);
//     // }
//   })

//   console.log(closeParensToFind.indexOf({type: '{', pairing: 'odd'}))

//   // return !closeParensToFind.length;
// };

// // console.log(isValid(s));
// isValid(s)

// // console.log(closing)

// // findAndRemove(')', 2, closing);
