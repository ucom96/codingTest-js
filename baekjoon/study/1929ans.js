const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [m, n] = fs.readFileSync(filePath).toString().trim().split(" ");
m = Number(m);
n = Number(n);

const isPrimeNumber = new Array(n + 1).fill(true);
const primeNumbers = [];

//m=1부터 가능하며 1은 소수가 아니므로 false 처리를 해주어야한다
isPrimeNumber[0] = false;
isPrimeNumber[1] = false;

//소수 판별
//소수인지 판별하기 위해서는 1과 자기자신을 제외한 약수가 있는지 확인해야함
//1~n까지 나열했을 때 sqrt(n)가 중간에 있고
//sqrt(n)이하의 수에서 약수가 있다면 소수가 아님으로 판별
//sqrt(n)이하의 수에서 소수를 찾아 소수의 배수를 지워가는 식으로 소수만 남긴다
for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
  //i가 소수라면
  if (isPrimeNumber[i]) {
    let j = 2;
    //소수의 배수들을 false 처리해준다
    while (i * j <= n) {
      isPrimeNumber[i * j] = false;
      j++;
    }
  }
}

//m이상 n이하의 수에서 소수만을 primeNumbers에 넣어준다
for (let i = m; i <= n; i++) {
  if (isPrimeNumber[i]) primeNumbers.push(i);
}

console.log(primeNumbers.join("\n"));
