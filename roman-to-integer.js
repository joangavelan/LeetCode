const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      total += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      total += map[s[i]];
    }
  }

  return total;
};


// const romanToInt = (s) => {
//   const numericalValues = [...s].map((currentVal, index, arr) => {
//     const previousVal = arr[index - 1];
//     const nextVal = arr[index + 1];

//     switch (currentVal) {
//       case "I":
//         if (nextVal === "V" || nextVal === "X") return 0;
//         return romans[currentVal];
//       case "V":
//         if (previousVal === "I")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       case "X":
//         if (nextVal === "L" || nextVal === "C") return 0;

//         if (previousVal === "I")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       case "L":
//         if (previousVal === "X")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       case "C":
//         if (nextVal === "D" || nextVal === "M") return 0;

//         if (previousVal === "X")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       case "D":
//         if (previousVal === "C")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       case "M":
//         if (previousVal === "C")
//           return romans[currentVal] - romans[previousVal];
//         else return romans[currentVal];
//       default:
//         return romans[currentVal];
//     }
//   });
//   return numericalValues.reduce((a, b) => a + b);
// };

// console.log(romanToInt("XIV"));
