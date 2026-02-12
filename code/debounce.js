const debounce = (fn, delay) => {
  let timeoutId = null;

  function debounced(args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(args);
      clearTimeout(timeoutId);
    }, delay);
  }

  debounced.cancel = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debounced;
};

const debounced = debounce(console.log, 200);

debounced("a");
debounced("a");
debounced("a");
debounced("a");
debounced("a");
