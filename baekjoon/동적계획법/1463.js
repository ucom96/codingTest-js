//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

//dp table 생성
//저장될 모든 수는 n 이하이므로 n만큼의 table 생성
const dp = new Array(n + 1).fill(0);

//bottom-up
//c[x]=min(c[x/3],c[x/2],c[x-1])+1
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[n]);
