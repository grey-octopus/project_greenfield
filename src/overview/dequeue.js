class Dequeue {
  constructor(limit, initialQueue = {}) {
    this.limit = limit
    this.queue = initialQueue
    this.top = limit + 1
    this.bottom = 0
  }

  push(elem) {
    console.log('ELEM: ', elem)
    this.queue[this.top - 1] = elem
    this.top += 1
    if (this.top - 1 > this.limit) {
      this.bottom += 1
      delete this.queue[this.top - this.limit - 2]
    }
  }

  inject(elem) {
    this.queue[this.top - this.limit - 2] = elem
    if (this.top - 1 > this.limit) {
      delete this.queue[this.top - 2]
      this.top -= 1
      this.bottom -= 1
    }
  }
}

export default Dequeue