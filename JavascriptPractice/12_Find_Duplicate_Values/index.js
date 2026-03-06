function duplicates(arr) {
  return arr.filter((v, i) => arr.indexOf(v) !== i);
}

console.log(duplicates([1, 2, 3, 2, 4, 3])); // [2, 3]
