class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enQueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  deQueue() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      const removedNode = this.first;
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }
}

const queue = new Queue();
