const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [stairNum, ...stairScore] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

stairNum = Number(stairNum);
stairScore = stairScore.map((el) => Number(el));

const dp = new Array(stairNum).fill(0);

dp[0] = stairScore[0];
dp[1] = stairScore[0] + stairScore[1];
dp[2] = Math.max(stairScore[0] + stairScore[2], stairScore[1] + stairScore[2]);

for (let i = 3; i < stairNum; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairScore[i - 1] + stairScore[i],
    dp[i - 2] + stairScore[i]
  );
}

console.log(dp[stairNum - 1]);
