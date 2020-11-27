import fetch from "node-fetch";

export async function fetchRepositories() {
  const url = `https://api.github.com/users/yujiokayama/repos`;
  const response = await fetch(url);
  const Repositories = await response.json();
  return {
    Repositories,
  };
}

export async function gatStaticPaths() {
  return [
    {
      name: "hoge",
    },
    {
      name: "fuga",
    },
    {
      name: "bar",
    },
  ];
}
