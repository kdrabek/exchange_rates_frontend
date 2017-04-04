export default class LocalStorageMock {
  constructor() {
    this.storage = {};
  }

  getItem(key) {
    return this.storage[key];
  }

  setItem(key, value) {
    this.storage[key] = value.toString();
  }

  clear() {
    this.storage = {};
  }

};