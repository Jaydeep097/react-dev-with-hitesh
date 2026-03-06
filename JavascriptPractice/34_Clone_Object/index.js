const obj = { name: "Jay", age: 25 };
const clone = JSON.parse(JSON.stringify(obj));

console.log(clone); // { name: "Jay", age: 25 }
