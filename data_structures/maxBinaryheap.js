class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  extractMax() {
    if (this.values.length < 1) return false;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return this;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    const childValue = this.values[childIndex];
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (childValue <= parentValue) break;
      this.values[childIndex] = parentValue;
      this.values[parentIndex] = childValue;
      childIndex = parentIndex;
    }
  }
  sinkDown() {
    let elementIndex = 0;
    while (elementIndex < this.values.length - 1) {
      let element = this.values[elementIndex];
      let childOne = this.values[elementIndex * 2 + 1];
      let childTwo = this.values[elementIndex * 2 + 2];

      if (element > childOne && element > childTwo) break;
      if (childOne > childTwo) {
        this.values[elementIndex] = this.values[elementIndex * 2 + 1];
        elementIndex = elementIndex * 2 + 1;
      } else {
        this.values[elementIndex] = this.values[elementIndex * 2 + 2];
        elementIndex = elementIndex * 2 + 2;
      }
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(85);
heap.insert(100);
heap.insert(105);
heap.insert(150);
heap.insert(175);
heap.insert(200);
console.log(heap.values);
console.log("Removed :", heap.extractMax());
