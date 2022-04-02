const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [...word] = fs.readFileSync(filePath).toString().trim();
const len = word.length;

//배열을 잘라서 뒤집고 문자열로 변환해주는 함수
function makeNewWord(start, end) {
  return word.slice(start, end).reverse().join("");
}

//비교 초기값
let result = "z".repeat(len);

//브루트포스로 가능한 모든 경우의 수를 각각 비교하여 사전순으로 가장 선행하는 문자열을 고른다
for (let i = 0; i < len - 2; i++) {
  for (let j = i + 1; j < len - 1; j++) {
    for (let k = j + 1; k < len; k++) {
      const firstWord = makeNewWord(0, i + 1);
      const secondWord = makeNewWord(i + 1, j + 1);
      const thirdWord = makeNewWord(j + 1, len);
      const newWord = firstWord + secondWord + thirdWord;

      if (newWord <= result) {
        result = newWord;
      }
    }
  }
}

console.log(result);
