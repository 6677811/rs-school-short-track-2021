const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.array = [];
    this.counter = 0;
  }

  get size() {
    return this.counter;
  }

  enqueue(value) {
    const current = new ListNode();
    current.value = value;

    if (this.counter === 0) {
      current.next = null;
      this.top = current;
    } else {
      const prev = this.array[this.counter - 1];
      current.next = prev;
    }
    this.counter = this.array.push(current);
  }

  dequeue() {
    const lastTop = this.top;
    if (this.counter > 1) {
      this.array[1].next = null;
      // eslint-disable-next-line prefer-destructuring
      this.top = this.array[1];
    }
    this.array.shift();
    return lastTop.value;
  }
}

module.exports = Queue;
