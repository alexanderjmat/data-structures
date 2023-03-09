const { Node, LinkedList } = require("./linked-list");

describe("insert", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
  });
  it("should insert node as head and tail if list is empty", () => {
    singletonList = new LinkedList();
    singletonList.insert(1);
    expect(singletonList.head.val).toBe(1);
    expect(singletonList.tail.val).toBe(1);
  });

  it("should insert node at the beginning of the list", () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(3);
  });
});

describe("push", () => {
  it("should insert node as head and tail if list is empty", () => {
    const list = new LinkedList();
    list.push(1);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(1);
  });

  it("should insert node at the end of the list", () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(3);
  });
});

describe("shift", () => {
  it("should remove the first element of the list", () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.shift();
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
  });
});

describe("pop", () => {
  it("should remove the last element of the list", () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.pop();
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
  });
});

describe("remove", () => {
  it("should remove the specified value", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.remove(3);
    expect(list.has(3)).toBe(false);
  });
  it("should return -1 if the value does not exist", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.remove(6)).toBe(-1);
  });
});
describe("has", () => {
  it("should return true if the value exists in the list", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.has(3)).toBe(true);
  });
  it("should return false if the value does not exist in the list", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.has(6)).toBe(false);
  });
});

describe("indexOf", () => {
  it("should return the index of the first occurence of the value", () => {
    const list = new LinkedList();
    list.insert(4)
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.indexOf(4)).toBe(3);
  });
  it("should return -1 if the value does not exist", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.indexOf(6)).toBe(-1);
  });
});

describe("toArray", () => {
  it("should return an array containing the values in the list in the proper order", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    console.log(list.toArray())
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("reverse", () => {
  it("should return a reversed version of the list", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    let reversed = list.reverse()
    expect(reversed.toArray()).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("sum", () => {
  it("should return the sum of all values in the list", () => {
    const list = new LinkedList();
    list.insert(5)
    list.insert(4)
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.sum()).toBe(15);
  });
});
