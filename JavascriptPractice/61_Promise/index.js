const promise = new Promise((res, rej) => {
  res("done");
});

promise.then((result) => console.log(result)); // done
