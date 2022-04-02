const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let word = fs.readFileSync(filePath).toString().trim();

const croatiaAlp = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

//크로아티아 알파벳을 하나씩 확인한다
croatiaAlp.forEach((alp) => {
  //크로아티아 알파벳을 word와 비교하기 위해 정규표현식으로 생성한다
  const regEx = new RegExp(alp, "g");
  //크로아티아 알파벳이 word에 속해 있다면 A로 바꾼다
  word = word.replace(regEx, "A");
});

//바뀐 word 길이 출력
console.log(word.length);
