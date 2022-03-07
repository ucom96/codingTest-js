//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

//알파벳 배열
const alphabet = [];

//알파벳 찾기
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  alphabet.push(input.indexOf(String.fromCharCode(i)));
}

console.log(alphabet.join(" "));
