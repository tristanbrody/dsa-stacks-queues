/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.list = [];
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val);
    this.list.push(node);
    if (this.list.length === 1) this.first = node;
    this.last = node;
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.list.length === 0) {
      throw new Error();
    } else {
      this.size--;
      this.first = this.list[1];
      const toRemove = this.list[0];
      this.list.shift();
      return toRemove.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.list[0].val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.list.length === 0 ? true : false;
  }
}

module.exports = Queue;
