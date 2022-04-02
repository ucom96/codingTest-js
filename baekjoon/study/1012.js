const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);
