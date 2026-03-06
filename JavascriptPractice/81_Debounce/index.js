function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const log = debounce(() => console.log("debounced!"), 500);
log();
log();
log(); // only this one fires after 500ms
