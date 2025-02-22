class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0

  }

  addToHead(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);
    if (this.head === null) this.tail = newNode;
    else this.head.prev = newNode; 
    
    newNode.next = this.head;
    this.head = newNode;
    

    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);   
    if (this.tail === null) this.head = newNode;
    else this.tail.next = newNode; 
    
    newNode.prev = this.tail;
    this.tail = newNode;
 
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

let doublyLinkedList;


doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addToTail(1);
doublyLinkedList.addToTail(2);
doublyLinkedList.addToTail(3);
doublyLinkedList.print()

doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(1);
  doublyLinkedList.addToHead(2);
  doublyLinkedList.addToHead(3);
  doublyLinkedList.print()







module.exports = DoublyLinkedList;