const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let n = fs.readFileSync(filePath).toString().trim();
n = Number(n);

const dp = new Array(n).fill(0);
dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
}

console.log(dp[n - 1]);
