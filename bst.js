class Node {
    constructor(val, left=null, right=null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root
    }

    insert(node) {
        if (!this.root) {
            this.root = node
            return this.root
        }
        if (this.root.val == node.val) return false
        let current = this.root
        while (current.left || current.right) {
            console.log(node.val, current.val)
            if (node.val == current.val) return false;
            if (node.val > current.val) {
                if (current.right == node) return this.root                
                current.right ? current = current.right : current.right = node
            } else if (node.val < current.val) {
                if (current.left == node) return this.root
                current.left ? current = current.left : current.left = node
            }
        }
        
        node.val > current.val ? current.right = node : current.left = node
        return this.root
    }

    insertRecursively(node) {
        if (!this.root) {
            this.root = node
            return this.root
        }
        function helper(root) {
            console.log(root)
            if (!root.left && !root.right) {
                node.val > root.val ? root.right = node : root.left = node
                return root
            } else if (!root.left) {
                node.val < root.val ? root.left = node : helper(root.right)
                if (node.val > root.val) return helper(root.right)
                root.left = node
                return root
            } else if (!root.right) {
                if (node.val < root.val) return helper(root.left)
                root.right = node;
                return root
            }
            
            if (node.val > root.val) return helper(root.right)
            if (node.val < root.val) return helper(root.left)

            return root
        }
        return helper(this.root)
    }

    find(val) {
        let current = this.root
        while (current) {
            if (current.val > val) current = current.left
            else if (current.val < val) current = current.right
            else return current
        }

        return false;
    }

    findRecursively(val) {
        function helper(root) {
            if (!root) return false;
            if (root.val == val) return root
            if (root.val > val) return helper(root.left)
            return helper(root.right)
        }
        return helper(this.root)
    }

    dfsPreOrder() {
        function helper(root) {
            const arr = []
            console.log(arr)
            if (root) {
                arr.push(root.val)
                arr.push(...helper(root.left))
                arr.push(...helper(root.right))
            }
            return arr

        }
        return helper(this.root)
    }

    dfsInOrder() {
        function helper(root) {
            const arr = []
            console.log(arr)
            if (root) {
                arr.push(root.val)
                arr.push(...helper(root.right))
                arr.unshift(...helper(root.left))
            }
            return arr
        }
        return helper(this.root)
    }

    dfsPostOrder() {
        function helper(root) {
            const arr = []
            if (root) {
                arr.push(root.val) 
                arr.unshift(...helper(root.right))
                arr.unshift(...helper(root.left))
            }
            return arr
        }
        return helper(this.root)
    }

    bfs() {
        if (!this.root) return []
        const queue = [this.root]
        const values = []

        while (queue.length) {
            let current = queue.pop()
            values.push(current.val)
            if (current.left) queue.unshift(current.left)
            if (current.right) queue.unshift(current.right)
        }
        return values
    }


}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(new Node(15))
binarySearchTree.insert(new Node(20))
binarySearchTree.insert(new Node(10))
binarySearchTree.insert(new Node(12))
binarySearchTree.insert(new Node(1))
binarySearchTree.insert(new Node(5))
binarySearchTree.insert(new Node(50));

const E = new Node("E")
const B = new Node("B")
const G = new Node("G")
const A = new Node("A")
const D = new Node("D")
const F = new Node("F")

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

const tree = new BinarySearchTree(E)

module.exports = {
    Node,
    BinarySearchTree
}
