const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [nm, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");
//input
nm = nm.split(" ");
const n = Number(nm[0]);
const m = Number(nm[1]);
const rec = Array.from(new Array(n), () => new Array(m));
for (let i = 0; i < n; i++) {
  const temp = numbers[i].split("");
  for (let j = 0; j < m; j++) {
    rec[i][j] = Number(temp[j]);
  }
}

let result = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let k = 1; k < Math.min(m, n); k++) {
      if (
        i + k < n &&
        j + k < m &&
        rec[i][j] === rec[i][j + k] &&
        rec[i][j] === rec[i + k][j] &&
        rec[i][j] === rec[i + k][j + k]
      ) {
        result = Math.max(result, k + 1);
      }
    }
  }
}

console.log(result * result);
