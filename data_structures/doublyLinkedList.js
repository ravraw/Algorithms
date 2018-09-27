class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null; // important :remove the prev link of removed tail
    }
    this.length--;
    return removedTail;
  }

  shift() {
    if (!this.head) return undefined;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null; // important
    }
    this.length--;
    return removedHead;
  }

  unshift() {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = newHead;
      this.head.next = oldHead;
      oldHead.prev = newHead;
    }
    this.length++;
    return this;
  }
}

// Methods in use

const list = new DoublyLinkedList();
// list.push("1");
// list.push("2");
// list.push("3");
// list.push("4");
// list.push("5");

///
console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");

// console.log("pop##"list.pop());
console.log("push##", list.push("rav"));
console.log("push##", list.push("raw"));
// console.log("push##", list.push("raw"));
// console.log("shift##", list.shift());
// console.log("unshift##", list.unshift("raw"));
//console.log("get ##", list.get(3));
//console.log("set ##", list.set(3, "new Value"));
// console.log("insert ##", list.insert(0, "new Value"));
// console.log("reverse ##", list.reverse());

console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");
console.log("list##", list.head, list.tail);
