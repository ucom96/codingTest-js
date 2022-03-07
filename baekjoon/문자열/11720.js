//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [N, num] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);

let result = 0;
for (let i = 0; i < N; i++) {
  result += Number(num[i]);
}
console.log(result);
