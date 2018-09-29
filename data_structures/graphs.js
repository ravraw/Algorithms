class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList.vertex) {
      this.adjacencyList[vertex] = [];
      return this.adjacencyList;
    }
    return false;
  }
  // refactor later for multiple vertexes
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    // const indexInV1 = this.adjacencyList[v1].indexOf(v2);
    // const indexInV2 = this.adjacencyList[v2].indexOf(v1);
    // this.adjacencyList[v1].splice(indexInV1, 1);
    // this.adjacencyList[v2].splice(indexInV2, 1);
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    return this.adjacencyList;
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}

const graph = new Graph();
console.log(graph.addVertex("apple"));
console.log(graph.addVertex("banana"));
console.log(graph.addEdge("apple", "orange"));
console.log(graph.addEdge("mango", "pineapple"));
console.log(graph.addEdge("mango", "strawberry"));
// console.log(graph.removeEdge("mango", "strawberry"));
// console.log(graph.removeEdge("plum", "peach"));
console.log(graph.removeVertex("strawberry"));
console.log(graph.adjacencyList);
