const DoublyLinkedList = require("linkedlist.js");

/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.nodes = [];
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.nodes.unshift(new Node(val));
    this.size++;
    this.last = this.nodes[this.nodes.length - 1];
    this.first = this.nodes[0];
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const toRemove = this.nodes.shift();
    this.size--;
    this.last = this.nodes[this.nodes.length - 1];
    this.first = this.nodes[0];
    return toRemove.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.nodes[0].val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
