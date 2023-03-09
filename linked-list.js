class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor(head=null) {
        this.head = head
        this.tail = head
    }

    insert(val) {
        //adds a node to the beginning of the list
        let current = this.head
        const node = new Node(val)
        if (!current) {
            this.head = node
            this.tail = node
            return val
        }
        node.next = current
        this.head = node
        return this
    }

    push(val) {
        //adds a node to the end of the list
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
            return val
        }
        this.tail.next = node
        this.tail = node
        return this
    }

    shift() {
        //removes the node at the beginning of the list
        this.head = this.head.next
        return this
    }

    pop() {
        //removes the node at the end of the list
        let current = this.head
        if (!current.next) {
            const val = this.head.val
            this.head = null
            this.tail = null
            return val
        }
        while (current.next.next) {
            current = current.next
        }
        this.tail = current
        current.next = null
        return this    
    }

    remove(val) {
        //removes first node that matches target value
        let current = this.head
        while (current.next) {
            if (current.next.val == val) {
                current.next = current.next.next
                return val
            }
            current = current.next
        }
        return -1
    }

    has(val) {
        let current = this.head
        while (current) {
            if (current.val == val) return true
            current = current.next
        }
        return false
    }

    indexOf(val) {
        let current = this.head
        let counter = 0
        while (current) {
            if (current.val == val) return counter
            counter++
            current = current.next
        }
        return -1
    }

    toArray() {
        let current = this.head
        const array = []
        while (current) {
            array.push(current.val)
            current = current.next
        }
        return array
    }

    reverse() {
        let current = this.head
        const reversed = new LinkedList()
        const vals = []

        while (current) {
            vals.push(current.val)
            current = current.next
        }
        for (let i = 0; i < vals.length; i++) {
            reversed.insert(vals[i])
        }
        return reversed
    }

    sum() {
        let current = this.head
        let result = 0
        
        while (current) {
            result += current.val
            current = current.next
        }
        return result
    }
}

let list = new LinkedList(new Node(1))
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)

module.exports = {
    Node, 
    LinkedList
}