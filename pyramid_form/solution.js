const row1 = [1, 1, 3, 3, 2, 1];
const row2 = [1, 1, 3, 3, 2, 5, 2];

function findHeight(length) {
  return (length % 2 === 0) ? (length / 2 + 1) : ((length + 1) / 2);
}

function main(rows) {
  console.log('processing:', rows);
  const pyramidHeight = findHeight(rows.length)
  console.log('pyramidHeight:', pyramidHeight);

  let count = 0;
  const correctRow = rows.map((x , index) => {
    if ((index + 1) < pyramidHeight) {
      x = count;
      count++;
    } else {
      x = count;
      count = count - 1;
    }
    return x;
  });

  console.log('correctRow', correctRow);

  let cost = 0;
  for(i = 0; i < rows.length; i++) {
    console.log(`calculating cost for ${rows[i]} for ${correctRow[i]}`);
    if (rows[i] != correctRow[i]) {
      cost = cost + Math.abs(rows[i] - correctRow[i])
    }
    console.log(`cost`, Math.abs(rows[i] - correctRow[i]));
  }
  console.log('total cost', cost);
}

main(row1);
main(row2);