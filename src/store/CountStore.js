import { observable, computed, action } from "mobx";

class CountStore {
  @observable count = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get isOdd() {
    return this.count % 2 === 1;
  }

  @action
  increment(value = 1) {
    this.count += value;
  }

  @action
  decrement(value = 1) {
    this.count -= value;
  }
}

export default CountStore;
