function privateCounter(num = 0) {
  let counter = num;

  return {
    increase: function () {
      return ++counter;
    },
    decrease: function () {
      return --counter;
    },
    value: function () {
      return counter;
    },
  };
}

let counter = privateCounter();
let counter2 = privateCounter(33);
let counter3 = privateCounter(4);
console.log(counter.value());
console.log(counter2.increase());
console.log(counter3.decrease());
