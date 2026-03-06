const obj = { a: 10, b: 20, c: 30 };
const total = Object.values(obj).reduce((a, b) => a + b);

console.log(total); // 60
