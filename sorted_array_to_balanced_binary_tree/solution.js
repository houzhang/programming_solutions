"use strict"

const examples = [
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4]
]

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function insertNode(parentNode, elements, direction) {
  const newNode = new Node(elements.pop());

  if (direction === 'left') {
    parentNode.left = newNode;
  } else {
    parentNode.right = newNode;
  }

  if (elements.length > 0) {
    insertNode(newNode, elements, direction)
  }
}

function main(elements) {
  let tree = new Node(elements.pop());
  const halfIndex = Math.floor(elements.length / 2);
  console.log('half index', halfIndex);
  insertNode(tree, elements.splice(0, halfIndex), 'left');
  insertNode(tree, elements, 'right');
  console.log(tree);
}

examples.forEach(example => {
  console.log("testing: ", example);
  main(example);
});