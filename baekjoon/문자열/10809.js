//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

//알파벳 배열
const alphabet = new Array(26).fill(-1);

//알파벳 찾기
for (let i = 0; i < input.length; i++) {
  //첫번째로 발견된 알파벳의 인덱스 값을 넣기 위함
  if (alphabet[input[i].charCodeAt() - 97] !== -1) {
    continue;
  }
  alphabet[input[i].charCodeAt() - 97] = i;
}

console.log(alphabet.join(" "));
