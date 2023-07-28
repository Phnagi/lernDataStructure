function sum1(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

function sum2(n) {
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
sum1(1000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`It rake ${timeDiff1} seconds to round sum1`);

let time3 = window.performance.now();
sum2(1000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`It rake ${timeDiff2} seconds to round sum2`);
