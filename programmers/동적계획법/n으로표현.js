function solution(N, number) {
  //number들의 각 연산횟수를 담을 DP table
  const numbers = new Array(32001);
  //연산횟수 변수
  let cnt = 1;
  //초기값 설정
  numbers[number] = cnt;
  //반복적으로 연산을 더하며 각 숫자에 대한 최소연산횟수를 tabel에 저장한다
  while (True) {
    //최소연산횟수 + 1만큼의 연산을 진행한다
    numbers
      .filter((el, idx) => el === cnt)
      .forEach((el, idx) => {
        if (numbers[idx] === undefined) {
          numbers[idx + 5] = cnt + 1;
        }
      });
  }
}

const N = 5;
const number = 12;
console.log(solution(N, number));
