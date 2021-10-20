/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** LinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.nodes = [];
    if (vals.length > 0) {
      for (let val of vals) this.push(val);
    }
  }

  toString() {
    for (let n of this.nodes) {
      console.log("node is " + n.val);
      console.log("next", n.next);
      console.log("previous", n.previous);
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    ++this.length;
    if (this.length > 1) {
      this.head = this.nodes[0];
    } else {
      this.head = newNode;
    }
    if (this.length === 2) {
      this.nodes[0].next = newNode;
      newNode.previous = this.nodes[0];
    }
    if (this.length >= 3) {
      this.nodes[this.nodes.length - 1].next = newNode;
      newNode.previous = this.nodes[this.nodes.length - 1];
    }
    this.tail = newNode;
    this.nodes.push(newNode);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    this.nodes.unshift(newNode);
    this.head = newNode;
    ++this.length;

    if (this.length > 1) {
      newNode.next = this.nodes[1];
      this.nodes[1].previous = newNode;
    } else {
      newNode.next = null;
      this.head = newNode;
      this.tail = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    const toRemove = this.nodes[this.nodes.length - 1];
    this.nodes.pop();
    if (this.nodes.length >= 0) {
      --this.length;
    }
    if (this.nodes.length > 1) {
      this.nodes[this.nodes.length - 1] = this.tail;
      this.nodes[this.nodes.length - 2].next =
        this.nodes[this.nodes.length - 1];
      this.nodes[this.nodes.length - 2].previous =
        this.nodes[this.nodes.length - 2];
    }
    if (this.nodes.length === 1) {
      this.head = this.nodes[this.nodes.length - 1];
      this.tail = this.nodes[this.nodes.length - 1];
    }
    if (this.head === null) {
      return undefined;
    }
    if (this.nodes.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return toRemove.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const toReturn = this.nodes.shift();

    if (this.nodes.length >= 0) {
      --this.length;
    }
    if (this.nodes.length === 1) {
      this.head = this.nodes[0];
      this.tail = this.nodes[0];
    }

    if (this.nodes.length === 2) {
      this.tail = this.nodes[this.nodes.length - 1];
      this.head = this.nodes[0];
    }

    if (this.nodes.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return toReturn.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.nodes[idx].val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.nodes[idx].val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    ++this.length;
    const newNode = new Node(val);
    newNode.next = this.nodes[idx];
    this.nodes.splice(idx, 0, newNode);
    if (this.nodes.length === 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.nodes[idx - 1].next = newNode;
    }
    if (idx === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (idx === this.nodes.length - 1) {
      this.tail = newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    this.length--;
    const toRemove = this.nodes[idx];
    this.nodes.splice(idx, 1);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.nodes.length = 0;
      return toRemove;
    }

    if (this.length === 1) {
      this.head = this.nodes[0];
      this.tail = this.nodes[0];
      this.next = null;
    }

    if (this.length >= 3 && idx === this.length - 2) {
      this.tail = this.nodes[this.length - 3];
      return toRemove;
    }
    if (this.length === 2) {
      this.head = this.nodes[0];
      this.tail = this.nodes[1];
      this.nodes[0].next = this.nodes[1];
      this.nodes[1].previous = this.nodes[0];
    } else {
      this.nodes[idx - 1].next = this.nodes[idx + 1].next;
      this.nodes[idx - 1].previous = this.nodes[idx - 2];
    }

    if (idx === 0) {
      this.head = this.nodes[idx + 1];
    }
    return toRemove;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.nodes.length === 0) return 0;
    let total = 0;
    for (let n of this.nodes) {
      total += n.val;
    }
    return total / this.nodes.length;
  }
}

module.exports = DoublyLinkedList;

// const list1 = new LinkedList(
// );

// list1.push('something');

// list1.push('something else');

// list1.push('another thing');

// list1.push("third thing");
