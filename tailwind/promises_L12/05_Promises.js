//   now promise chaining

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fething data 1");

// let p1 = asyncFunc(); // we calling the function
// p1.then((res) => {
//   console.log(res);
// }); // jaise he promise resolve hoga toh hum result return karan chate hai

// from here chaining ek promise resolve hoga tab he promise 2 ko call lagayenge
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 2");
//       resolve("success");
//     }, 4000);
//   });
// }

// // Promise Chaining (The Correct Way)
// console.log("fetching data 1...");
// asyncFunc1()
//   .then((res) => {
//     console.log("fetching data 2...");
//     return asyncFunc2(); // We return the next promise here
//   })
  // .then((res) => {
  //   console.log("All data fetched");
  // });
