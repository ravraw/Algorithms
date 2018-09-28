class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.length;
  }

  pop() {
    if (!this.first) return false;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const newFirst = this.first.next;
      this.first.next = null;
      this.first = newFirst;
    }
    return --this.length;
  }
}
