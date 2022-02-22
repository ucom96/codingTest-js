//fs모듈 가져오기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
//전체 입력받기
let input = fs.readFileSync(filePath).toString().trim().split("\n");
