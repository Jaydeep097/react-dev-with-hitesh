const arr = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const grouped = arr.reduce((acc, x) => {
  acc[x.type] = acc[x.type] || [];
  acc[x.type].push(x);
  return acc;
}, {});

console.log(grouped);
// { fruit: [{...}, {...}], veg: [{...}] }
