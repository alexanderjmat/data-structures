const { Node, BinarySearchTree } = require("./bst");

describe("insert", () => {
  it("should insert node as root if tree is empty", () => {
    const bst = new BinarySearchTree();
    const node = new Node(5);
    bst.insert(node);
    expect(bst.root).toBe(node);
  });

  it("should insert node as right child of root if greater than root value", () => {
    const bst = new BinarySearchTree();
    bst.insert(new Node(5));
    const node = new Node(10);
    bst.insert(node);
    expect(bst.root.right).toBe(node);
  });

  it("should insert node as left child of root if less than root value", () => {
    const bst = new BinarySearchTree();
    bst.insert(new Node(5));
    const node = new Node(3);
    bst.insert(node);
    expect(bst.root.left).toBe(node);
  });

  it("should not insert node if node value already exists in tree", () => {
    const bst = new BinarySearchTree();
    bst.insert(new Node(5));
    expect(bst.insert(new Node(5))).toBe(false);
  });

  it("should insert node as right child of parent node if greater than parent value", () => {
    const bst = new BinarySearchTree();
    const root = new Node(5);
    const left = new Node(3);
    const right = new Node(10);
    bst.insert(root);
    bst.insert(left);
    bst.insert(right);
    const node = new Node(15);
    bst.insert(node);
    expect(right.right).toBe(node);
  });

  it("should insert node as left child of parent node if less than parent value", () => {
    const bst = new BinarySearchTree();
    const root = new Node(5);
    const left = new Node(3);
    const right = new Node(10);
    bst.insert(root);
    bst.insert(left);
    bst.insert(right);
    const node = new Node(1);
    bst.insert(node);
    expect(left.left).toBe(node);
  });
});

describe("Tree.find()", () => {
  let tree;

  beforeEach(() => {
    /*
      Create a test tree like this:
             8
           /   \
          3     10
         / \      \
        1   6      14
           / \    /
          4   7  13
      */
    const root = new Node(8);
    root.left = new Node(3);
    root.right = new Node(10);
    root.left.left = new Node(1);
    root.left.right = new Node(6);
    root.left.right.left = new Node(4);
    root.left.right.right = new Node(7);
    root.right.right = new Node(14);
    root.right.right.left = new Node(13);

    tree = new BinarySearchTree(root);
  });

  test("returns false if tree is empty", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.find(5)).toBe(false);
  });

  test("returns false if val is not in the tree", () => {
    expect(tree.find(5)).toBe(false);
    expect(tree.find(15)).toBe(false);
  });

  test("returns the node with the specified val", () => {
    expect(tree.find(8)).toEqual(tree.root);
    expect(tree.find(3)).toEqual(tree.root.left);
    expect(tree.find(10)).toEqual(tree.root.right);
    expect(tree.find(1)).toEqual(tree.root.left.left);
    expect(tree.find(6)).toEqual(tree.root.left.right);
    expect(tree.find(4)).toEqual(tree.root.left.right.left);
    expect(tree.find(7)).toEqual(tree.root.left.right.right);
    expect(tree.find(14)).toEqual(tree.root.right.right);
    expect(tree.find(13)).toEqual(tree.root.right.right.left);
  });
});

describe("Tree.dfsPreOrder()", () => {
  let tree;

  beforeEach(() => {
    /*
      Create a test tree like this:
             1
           /   \
          2     3
         / \      \
        4   5      6
               /   / \
              7   8   9
      */
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.right = new Node(6);
    root.right.right.left = new Node(7);
    root.right.right.right = new Node(8);
    root.right.right.right.right = new Node(9);

    tree = new BinarySearchTree(root);
  });

  test("returns an empty array if tree is empty", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.dfsPreOrder()).toEqual([]);
  });

  test("returns an array of nodes in the correct order", () => {
    expect(tree.dfsPreOrder()).toEqual([1, 2, 4, 5, 3, 6, 7, 8, 9]);
  });
});

describe("Tree.dfsInOrder()", () => {
  let binarySearchTree;

  beforeEach(() => {
    /*
      Create a test tree like this:
             15
           /   \
          10     20
         / \      \
        5   12     50
       /
      1  

      */
    binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(new Node(15));
    binarySearchTree.insert(new Node(20));
    binarySearchTree.insert(new Node(10));
    binarySearchTree.insert(new Node(12));
    binarySearchTree.insert(new Node(1));
    binarySearchTree.insert(new Node(5));
    binarySearchTree.insert(new Node(50));
  });

  test("returns an empty array if tree is empty", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.dfsInOrder()).toEqual([]);
  });

  test("returns an array of nodes in the correct order", () => {
    expect(binarySearchTree.dfsInOrder()).toEqual([1, 5, 10, 12, 15, 20, 50]);
  });
});

describe("Tree.dfsPostOrder()", () => {
  let binarySearchTree;

  beforeEach(() => {
    /*
      Create a test tree like this:
             15
           /   \
          10     20
         / \      \
        5   12     50
       /
      1  

      */
    binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(new Node(15));
    binarySearchTree.insert(new Node(20));
    binarySearchTree.insert(new Node(10));
    binarySearchTree.insert(new Node(12));
    binarySearchTree.insert(new Node(1));
    binarySearchTree.insert(new Node(5));
    binarySearchTree.insert(new Node(50));
  });

  test("returns an empty array if tree is empty", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.dfsPostOrder()).toEqual([]);
  });

  test("returns an array of nodes in the correct order", () => {
    expect(binarySearchTree.dfsPostOrder()).toEqual([5, 1, 12, 10, 50, 20, 15]);
  });
});

describe("Tree.bfs()", () => {
  let binarySearchTree;

  beforeEach(() => {
    /*
      Create a test tree like this:
             15
           /   \
          10     20
         / \      \
        5   12     50
       /
      1  

      */
    binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(new Node(15));
    binarySearchTree.insert(new Node(20));
    binarySearchTree.insert(new Node(10));
    binarySearchTree.insert(new Node(12));
    binarySearchTree.insert(new Node(1));
    binarySearchTree.insert(new Node(5));
    binarySearchTree.insert(new Node(50));
  });

  test("returns an empty array if tree is empty", () => {
    const emptyTree = new BinarySearchTree();
    expect(emptyTree.bfs()).toEqual([]);
  });

  test("returns an array of nodes in BFS order", () => {
    expect(binarySearchTree.bfs()).toEqual([15, 10, 20, 1, 12, 50, 5]);
  });
});
