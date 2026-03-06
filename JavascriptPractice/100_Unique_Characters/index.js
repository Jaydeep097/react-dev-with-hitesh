const str = "abcdef";
const isUnique = new Set(str).size === str.length;

console.log(isUnique); // true
console.log(new Set("aabbc").size === "aabbc".length); // false
