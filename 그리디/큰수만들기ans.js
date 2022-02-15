function solution(number, k) {
  //큰 수만 넣어두는 스택
  let stack = [];
  //number의 인덱스를 표시해주는 변수
  let head = 0;
  //number.length-k 만큼의 자릿수를 확보하기 위한 변수
  let cnt = k;
  stack.push(number[head++]);
  //스택에 삽입, 삭제를 반복적으로 실행한다
  while (stack.length < number.length - k || head < number.length) {
    //스택에 있는 수와 number의 수를 비교한다
    //스택에 있는 수가 number의 수보다 크거나 같다면
    if (stack[stack.length - 1] < number[head] && cnt) {
      //스택에 있는 수를 빼주고 number에 있는 수를 스택에 넣는다
      stack.pop();
      cnt--;
      continue;
    }
    stack.push(number[head++]);
  }

  return stack.slice(0, number.length - k).join("");
}

const number = "4177252841";
const k = 4;

console.log(solution(number, k));
