//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = input[0];

//testcase값만큼 n이 바뀌므로 반복문을 써서 n을 갱신해줌
for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  //점화식 구현
  for (let j = 4; j <= n; j++) {
    dp[j] = dp[j - 2] + dp[j - 3];
  }
  console.log(dp[n]);
}
