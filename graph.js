class Node {
  constructor(val, adjacents = new Set()) {
    this.val = val;
    this.adjacents = adjacents;
  }
}

class Graph {
  constructor(nodes = new Set()) {
    this.nodes = nodes;
  }

  addVertex(node) {
    this.nodes.add(node);
    return this.nodes;
  }

  addVertices(arr) {
    for (let node of arr) {
      this.addVertex(node);
    }
    return this.nodes;
  }

  setEdge(a, b) {
    a.adjacents.add(b);
    b.adjacents.add(a);
  }

  areConnectedBFS(a, b) {
    let toVisit = [a];
    let visited = new Set(toVisit);
    while (toVisit.length) {
      let current = toVisit.shift();
      console.log("BFS:", current.val);
      if (current == b) return true;
      for (let connection of current.adjacent) {
        if (!visited.has(connection)) {
          toVisit.push(connection);
          visited.add(connection);
        }
      }
    }
    return false;
  }

  areConnectedDFS(a, b) {
    let toVisit = [a];
    let visited = new Set(toVisit);

    while (toVisit.length) {
      let current = toVisit.pop();
      console.log("DFS:", current.val);
      if (current == b) return true;
      for (let connection of current.adjacent) {
        if (!visited.has(connection)) {
          toVisit.push(connection);
          visited.add(connection);
        }
      }
    }
    return false;
  }

  areConnectedDFSRecursion(a, b, seen = new Set([a])) {
    if (a == b) return true;
    console.log(a, b);
    for (let connection of a.adjacent) {
      if (!seen.has(connection)) {
        seen.add(connection);
        if (this.areConnectedDFSRecursion(connection, b, seen)) return true;
      }
    }
    return false;
  }
}

let graph = new Graph();
