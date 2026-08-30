var CreateCounter = function (init) {
  let current = init;

  return {
    increment: function () {
      return ++current;
    },
    decrement: function () {
      return --current;
    },
    reset: function () {
      return (current = init);
    },
  };
};

const counter = CreateCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
