import { get } from "./request";

const fetchGithubProjects = function fetchGithubProjects() {
  return get("https://api.github.com/search/repositories?q=javascript&sort=stars");
};

export { fetchGithubProjects };
