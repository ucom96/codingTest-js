const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];
let result = 0;

for (i in input) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    //레이저인 경우
    if (input[i - 1] === "(") {
      stack.pop();
      result += stack.length;
    }
    //쇠막대기의 끝에 다다른 경우
    else {
      stack.pop();
      result++;
    }
  }
}

console.log(result);
