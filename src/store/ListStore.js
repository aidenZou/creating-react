import { observable, computed, action, runInAction, flow } from "mobx";
import { fetchGithubProjects } from "../api";

const somePreprocessing = function somePreprocessing(projects) {
  return projects.data.items;
};

class ListStore {
  @observable githubProjects = [];

  @observable state = "static"; // "static" "pending" "done" "error"

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // @action
  // fetchProjects() {
  //   this.githubProjects = [];
  //   this.state = "pending";
  //   fetchGithubProjects().then(
  //     projects => {
  //       runInAction(() => {
  //         const filteredProjects = somePreprocessing(projects);
  //         this.githubProjects = filteredProjects;
  //         this.state = "done";
  //       });
  //     },
  //     error => {
  //       this.state = "error";
  //     }
  //   );
  // }

  // @action async fetchProjects() {
  //   this.githubProjects = [];
  //   this.state = "pending";
  //   try {
  //     const projects = await fetchGithubProjects();
  //     const filteredProjects = somePreprocessing(projects);
  //     // await 之后，再次修改状态需要动作:
  //     runInAction(() => {
  //       this.state = "done";
  //       this.githubProjects = filteredProjects;
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.state = "error";
  //     });
  //   }
  // }

  fetchProjects = flow(function* fetchProjects() {
    // <- 注意*号，这是生成器函数！
    this.githubProjects = [];
    this.state = "pending";
    try {
      const projects = yield fetchGithubProjects(); // 用 yield 代替 await
      const filteredProjects = somePreprocessing(projects);
      // 异步代码块会被自动包装成动作并修改状态
      this.state = "done";
      this.githubProjects = filteredProjects;
    } catch (error) {
      this.state = "error";
    }
  });
}

export default ListStore;
