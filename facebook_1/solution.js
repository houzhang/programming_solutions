const three = ['r', 'g', 'b'];
const arr1 = ['r', 'g', 'b', 'g', 'b'];
const arr2 = ['r', 'g', 'b', 'g', 'g'];

function main(arr) {
  console.log(arr);
  let canRun = true;
  while(canRun) {
    for (i = 0; i< arr.length; i++) {
      if (arr[i] != arr[i+1]) {
        arr.splice(i, 2, transform(arr[i], arr[i+1], three))
        break;
      }
    }
    canRun = !([...new Set(arr)].length === 1)
  }

  console.log(arr);
}

function transform(element1, element2, arr) {
  const transformed = arr.filter(element => element != element1)
    .filter(element => element != element2);
  return transformed[0];
}

main(arr1);
main(arr2)


