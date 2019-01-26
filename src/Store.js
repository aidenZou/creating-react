import { observable, computed } from "mobx";

class Store {
  @observable count = 0;

  // constructor() {}

  @computed get isOdd() {
    return this.count % 2 === 1;
  }

  increment(value = 1) {
    this.count += value;
  }

  decrement(value = 1) {
    this.count -= value;
  }
}

export default Store;
