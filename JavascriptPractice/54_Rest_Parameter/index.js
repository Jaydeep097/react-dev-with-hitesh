function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
