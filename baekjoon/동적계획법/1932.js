const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
//전체 입력받기
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = input[0];
//console.log(n);
//삼각형 배열 만들기
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = input[i + 1].split(" ").map(Number); //이차배열로 만든다
}
//console.log(triangle);
//배열크기만큼 반복
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j !== 0 && i !== j) {
      arr[i][j] = arr[i][j] + Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    } else if (j === 0) {
      arr[i][j] = arr[i][j] + arr[i - 1][j];
    } else if (i === j) {
      arr[i][j] = arr[i][j] + arr[i - 1][j - 1];
    }
  }
}
//console.log(arr);
console.log(Math.max(...arr[n - 1]));
