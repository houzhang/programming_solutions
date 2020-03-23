"use strict"

const examples = [
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5, 6]
]

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function insertNode(parentNode, elements, direction) {
  let newNode = null;

  if (direction === 'left') {
    newNode = new Node(elements.pop());
    parentNode.left = newNode;
  } else {
    newNode = new Node(elements.shift());
    parentNode.right = newNode;
  }

  if (elements.length > 0) {
    insertNode(newNode, elements, direction)
  }
}

function main(elements) {
  let tree = new Node(elements.splice(Math.floor(elements.length / 2), 1).pop());
  const halfIndex = Math.floor(elements.length / 2);
  console.log('half index', halfIndex);
  console.log('full array: ', elements);
  const sliceIndex = ((halfIndex + 1) === elements.length ? halfIndex : halfIndex + 1)
  const leftArray = elements.slice(0, sliceIndex);
  console.log('left side array: ', leftArray)
  const rightArray = elements.slice(sliceIndex, elements.length + 1);
  console.log('right side array: ', rightArray)
  insertNode(tree, leftArray, 'left');
  insertNode(tree, rightArray, 'right');
  console.log(JSON.stringify(tree));
}

examples.forEach(example => {
  console.log("testing: ", example);
  main(example);
});