const obj = { a: 1, b: { c: 2 } };
const clone = structuredClone(obj);

clone.b.c = 99;
console.log(obj.b.c); // 2 (original unchanged)
console.log(clone.b.c); // 99
