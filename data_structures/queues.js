// A new node to be inserted
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Queue data-structure
class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Add node method
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
  // Remove node method
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
