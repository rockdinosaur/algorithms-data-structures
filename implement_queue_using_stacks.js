// Implement the following operations of a queue using stacks.
//
// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Notes:
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).


/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
}
/**
 * Push element x to the back of queue.
 // * @param {number} x
 // * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 // * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
};

/**
 * Get the front element.
 // * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 // * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
