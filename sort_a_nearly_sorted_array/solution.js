"use strict";

const tests = [
  { array: [6, 5, 3, 2, 8, 10, 9], k: 3 },
  { array: [10, 9, 8, 7, 4, 70, 60, 50], k: 4 },
  { array: [6, 5, 3, 2, 8, 10, 1], k: 3 } // this one won't work, k should be 6
];

function main(array, k) {
  console.log("input: ", array);
  for (let i = 0; i < array.length; i++) {
    // console.log("in i loop: ", array[i]);
    let current = array[i];
    for (let j = i - 1; j >= 0; j--) {
      // console.log("in j loop: ", array[j] + ", with " + current);
      let previous = array[j];
        if (current < previous) {
          array.splice(j + 1, 1, previous);
          array.splice(j, 1, current);
        }
      if (i - j === k) {
        break;
      }
    }
    // console.log("output: ", array);
  }
  console.log("output: ", array);
}

tests.forEach(test => {
  main(test.array, test.k);
});
