const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [num, pair, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let result = -1;

//인접리스트로 구현한 graph
const graph = [0];
for (let i = 1; i <= num; i++) {
  graph[i] = [];
}
arr.forEach((el) => {
  const [a, b] = el.split(" ");
  graph[a].push(+b);
  graph[b].push(+a);
});

//탐색
const visited = new Array(num + 1).fill(0);
function dfs(v) {
  result += 1;
  visited[v] = 1;
  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(1);
console.log(result);
