const DoublyLinkedList = require("linkedlist.js");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Deque extends DoublyLinkedList {
  constructor() {
    super();
  }

  appendleft(val) {
    this.super.unshift(val);
  }

  appendright(val) {
    this.super.push(val);
  }

  popleft() {
    this.super.shift();
  }

  popright() {
    this.super.pop();
  }

  peekleft() {
    return this.nodes[0].val;
  }

  peekright() {
    return this.nodes[this.nodes.length - 1].val;
  }

  isEmpty() {
    return this.length === 0;
  }
}
