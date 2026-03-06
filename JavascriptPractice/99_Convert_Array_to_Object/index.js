const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj = Object.fromEntries(arr);

console.log(obj); // { a: 1, b: 2, c: 3 }
