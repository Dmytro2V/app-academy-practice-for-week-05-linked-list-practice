const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let time1, time2

let testNode = new LinkedList
console.log('HeadSingle O(1)');
for ( let i = 0; i < 1000000; i += 100000) {
  time1 = new Date()
  for ( let j = 0; j < 1000000; j ++) {    
    testNode.addToHead(i)
  }
  time2 = new Date()
  console.log(time2 - time1);
}
testNode = new LinkedList
console.log('TailSingle O(n)');
for ( let i = 0; i < 10000; i += 1000) {
  time1 = new Date()
  for ( let j = 0; j < 5000; j ++) {    
    testNode.addToTail(i)
  }
  time2 = new Date()
  console.log(time2 - time1);
}
testNode = new DoublyLinkedList
console.log('HeadDoubly O(1)');
for ( let i = 0; i < 1000000; i += 100000) {
  time1 = new Date()
  for ( let j = 0; j < 1000000; j ++) { 
      testNode.addToTail(i)
  }
  time2 = new Date()
  console.log(time2 - time1);
}
testNode = new DoublyLinkedList
console.log('TailDoubly O(1)');
for ( let i = 0; i < 1000000; i += 100000) {
  time1 = new Date()
  for ( let j = 0; j < 1000000; j ++) {  
    testNode.addToTail(i)
  }
  time2 = new Date()
  console.log(time2 - time1);
}