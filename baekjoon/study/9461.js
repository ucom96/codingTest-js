const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [t, ...n] = fs.readFileSync(filePath).toString().trim().split("\n");

function printPN(n) {
  //dp 배열
  const dp = new Array(n).fill(0);
  //초기화
  dp[0] = dp[1] = dp[2] = 1;
  //보텀업
  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  console.log(dp[n - 1]);
}

//testcase 개수만큼 실행
for (let i = 0; i < t; i++) {
  printPN(Number(n.shift()));
}
