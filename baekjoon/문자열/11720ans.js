//입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = input[1].split("").reduce((prev, curr) => +prev + +curr);
console.log(result);
