class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0
  }

  addToHead(val) {
    // Your code here
    let newNode = new LinkedListNode(val);    
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new LinkedListNode(val);
    if (this.length === 0) this.head = newNode;//newNode.next = null - default so not need
    
    // searhing tail from head
    
    let prevNode = this.head;
    let nextNode;
    for (let i = 1; i < this.length ; i++) {// 1 because if only 1 node, it has no next node
      nextNode = prevNode.next;
      prevNode = nextNode;
    }     
    prevNode.next = newNode;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

let linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

console.log(linkedList.head.next.next.value)
linkedList.print()




module.exports = LinkedList;