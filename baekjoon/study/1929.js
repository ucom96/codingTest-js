const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [m, n] = fs.readFileSync(filePath).toString().trim().split(" ");
m = Number(m);
n = Number(n);

const arr = new Array(n + 1).fill(0);
const prime = [];
for (let i = 2; i <= n; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    if (i >= m) {
      prime.push(i);
    }
    for (let j = 2; j <= parseInt(n / i); j++) {
      arr[i * j] = 1;
    }
  }
}
console.log(prime.join("\n"));
