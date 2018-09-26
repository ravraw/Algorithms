class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentIndex++;
      currentNode = currentNode.next;
      console.log("Looooppping .......");
    }
    return currentNode;
  }
  set(index, val) {
    const foundIndex = this.get(index);
    if (foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
  }
}

// Methods in use

const list = new singlyLinkedList();
list.push("Hi");
list.push("There");
list.push("How");
list.push("are");
list.push("you");

///
console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");

// console.log("pop##"list.pop());
// console.log("push##", list.push("rav"));
// console.log("shift##", list.shift());
// console.log("unshift##", list.unshift("raw"));
//console.log("get ##", list.get(3));
console.log("set ##", list.set(3, "new Value"));

console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");
