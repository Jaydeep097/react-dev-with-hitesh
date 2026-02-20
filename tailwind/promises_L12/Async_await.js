function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// Async-await
async function getAllData() {
  await getData(1); // Pauses 2s, prints "data 1"
  console.log("getting data 2")
  await getData(2); // Pauses 2s, prints "data 2"
    console.log("getting data 3")
  await getData(3); // Pauses 2s, prints "data 3"
}

// To actually see it work on your laptop, call the function:
getAllData();




// //Promise Chain
// console.log("getting data1 ....");
// getData(1)
//   .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });
