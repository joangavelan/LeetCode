const s = "Let's take LeetCode contest"

const reverseWords = (s) => s.split(" ").map(word => word.split("").reverse().join("")).join(" ");

console.log(reverseWords(s)); // s'teL ekat edoCteeL tsetnoc