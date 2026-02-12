const throttle = (fn, delay) => {
  let lastTime = 0;

  function throttled(...args) {
    const now = new Date();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  }

  throttle.cancel = function () {
    lastTime = new Date();
  };

  return throttled;
};

const fn = throttle(console.log, 400);
