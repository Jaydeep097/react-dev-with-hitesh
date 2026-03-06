let count = 0;
const id = setInterval(() => {
  count++;
  console.log("tick", count);
  if (count === 5) clearInterval(id);
}, 1000);
