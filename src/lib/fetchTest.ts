import fetch from "node-fetch";

export async function fetchRepositories() {
  const url = `https://api.github.com/users/yujiokayama/repos`;
  const response = await fetch(url);
  return await response.json();
}
