//통과못함
//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
//console.log(n);

//계단 점수 배열
const stair = input.map((el) => ({
  num: Number(el),
  seq: false,
}));

//console.log(stair);

//연속된 세 계단을 오르지 못하도록 하는 카운트
let cnt = 0;
//dp 배열
const dp = new Array(n).fill(0);
dp[0] = stair[0].num;
dp[1] = dp[0] + stair[1].num;
stair[1].seq = true;

//bottom-up
for (let i = 2; i < n; i++) {
  if (stair[i - 1].seq === true) {
    dp[i] = dp[i - 2] + stair[i].num;
  } else {
    if (dp[i - 1] + stair[i].num >= dp[i - 2] + stair[i].num) {
      dp[i] = dp[i - 1] + stair[i].num;
      stair[i].seq = true;
    } else {
      dp[i] = dp[i - 2] + stair[i].num;
    }
  }
}
console.log(dp[n - 1]);
