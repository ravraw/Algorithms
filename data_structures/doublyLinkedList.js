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

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter, current;

    if (index <= this.length / 2) {
      console.log("working from start....");
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      console.log("working from end....");
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!unshift(val);
    if (index === this.length) return !!push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return true;
  }
}

// Methods in use

const list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");

///
console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");

// console.log("pop##"list.pop());
// console.log("push##", list.push("rav"));
// console.log("push##", list.push("raw"));
// console.log("push##", list.push("raw"));
// console.log("shift##", list.shift());
// console.log("unshift##", list.unshift("raw"));
// console.log("get ##", list.get(3));
// console.log("set ##", list.set(4, "new Value"));
// console.log("insert ##", list.insert(1, "new Value"));
console.log("remove ##", list.remove(1));
// console.log("reverse ##", list.reverse());

console.log("-----------------------------");
console.log(list);
console.log("-----------------------------");
