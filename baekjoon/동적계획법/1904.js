//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

//dp 배열 생성
const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

//보텀업 방식을 이용하여 점화식 구현
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);
