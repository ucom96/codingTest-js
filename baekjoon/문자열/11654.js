//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim();
//아스키코드 변환
console.log(input.charCodeAt());
