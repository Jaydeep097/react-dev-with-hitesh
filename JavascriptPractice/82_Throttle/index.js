function throttle(fn, limit) {
  let wait = false;
  return () => {
    if (!wait) {
      fn();
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

const log = throttle(() => console.log("throttled!"), 1000);
log(); // fires
log(); // ignored (within 1s)
