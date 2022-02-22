//fs모듈 가져오기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
//전체 입력받기
let input = fs.readFileSync(filePath).toString().trim().split("\n");
//n,m,v 변수 만들기
let [n, m, v] = input[0].split(" ").map(Number);
//graph 만들기 (이차배열)
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
//graph에 연결된 노드 작성
for (let i = 1; i < m + 1; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
//연결된 노드 오름차순으로 정렬
graph.forEach((el) => el.sort((a, b) => a - b));
//방문여부 배열(모두 0으로 초기화)
let visited = new Array(n + 1).fill(0);

//dfs 답 배열(' '로 구분해야하므로 만듦)
let dfs_answer = [];
//dfs 함수
function dfs(v) {
  //방문체크
  visited[v] = 1;
  //방문 노드 출력
  dfs_answer.push(v);
  //v와 연결된 노드 찾기
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    //아직 방문하지 않은 노드라면
    if (visited[next] === 0) {
      //해당 노드로 방문
      dfs(next);
    }
  }
}
//dfs 답 출력(공백)
dfs(v);
console.log(dfs_answer.join(" "));
//console.log(graph);

let bfs_answer = [];
//bfs함수
visited.fill(0);
function bfs(v) {
  //큐 생성
  let q = [v];
  //반복
  while (q.length) {
    //큐에서 노드 빼기
    let i = q.shift();
    if (visited[i] === 1) continue;
    //방문여부 체크
    visited[i] = 1;
    //방문노드 배열에 삽입
    bfs_answer.push(i);
    //현 노드와 연결된 노드 찾기
    for (let j = 0; j < graph[i].length; j++) {
      const next = graph[i][j];
      //아직 방문하지 않았다면
      if (visited[next] === 0) {
        //연결된 노드 큐에 삽입
        q.push(next);
      }
    }
  }
}

bfs(v);
console.log(bfs_answer.join(" "));
