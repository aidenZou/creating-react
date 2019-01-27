import { configure } from "mobx";
import CountStore from "./CountStore";
import ListStore from "./ListStore";

configure({ enforceActions: "observed" }); // 不允许在动作之外进行状态修改

class RootStore {
  constructor() {
    this.countStore = new CountStore(this);
    this.listStore = new ListStore(this);
  }
}

export default RootStore;
