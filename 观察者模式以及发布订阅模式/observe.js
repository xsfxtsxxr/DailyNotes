class Observe {
  static events = new Set()

  static on (name, fn) {
    this.events.set(name, { isOnce: false, fn })
  }
  static once (name, fn) {
    this.events.set(name, { isOnce: true, fn })
  }
  static off (name, fn) {
    this.events.delete(name)
  }
  static emit (name, data) {
    const cache = this.events.get(name)
    if (cache) {
      if (cache.isOnce) {
        this.events.delete(name)
      }
      cache.fn(data)
    }
  }
}