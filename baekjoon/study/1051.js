const fs = require("fs");
const { start } = require("repl");
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

let startX = 0;
let startY = 0;
let width = 0;
let height = 0;
let result = 1;
let newArea = 0;

for (let i = 0; i < m - 1; i++) {
  startX = i;
  for (let j = 0; j < n - 1; j++) {
    startY = j;
    for (let k = startX + 1; k < m; k++) {
      width = k - startX;
      for (let l = startY + 1; l < n; l++) {
        height = l - startY;
        if (
          width === height &&
          ((rec[startX][startY] === rec[startX][startY + width]) ===
            rec[startX + height][startY]) ===
            rec[startX + height][startY + width]
        ) {
          newArea = (width + 1) * (height + 1);
          if (result < newArea) {
            result = newArea;
          }
        }
      }
    }
  }
}

console.log(result);
