const obj = { name: "Jay", age: 25 };
Object.freeze(obj);
obj.age = 30; // will not change

console.log(obj.age); // 25
