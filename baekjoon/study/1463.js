const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const n = fs.readFileSync(filePath).toString().trim();

n = Number(n);
const dp = new Array(n + 1).fill(0);

dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[n]);
