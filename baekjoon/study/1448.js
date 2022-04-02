const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...len] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;
n = Number(n);
//변의 길이의 비교를 위해서 len의 요소 type을 Number로 변경
len = len.map((el) => Number(el));

//세 변의 길이합이 최대인 변들을 고르기 위해서는
//변의 길이를 내림차순 정렬 후 세 변들 중 가장 긴 변의 길이가 되도록이면 len 배열 내에서 가장 큰 값이어야 할 것

//변의 길이 정렬
len.sort((a, b) => b - a);
//가장 긴 변의 길이를 찾은 후
//삼각형 생성 조건에 부합하는지 확인할 것
for (let i = 0; i < n; i++) {
  //가장 긴 변의 길이 < 나머지 두 변의 합 => 삼각형 생성 가능
  if (len[i + 1] + len[i + 2] > len[i]) {
    result = len[i] + len[i + 1] + len[i + 2];
    break;
  }
}

if (result === 0) {
  console.log(-1);
} else {
  console.log(result);
}
