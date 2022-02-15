function solution(number, k) {
  //number의 수와 비교하여 더 큰수를 넣어둘 스택
  let stack = [];
  //number의 인덱스를 표시해주는 변수
  let head = 0;
  //number.length-k 만큼의 자릿수를 확보하기 위한 변수
  let cnt = k;
  stack.push(number[head++]);
  //스택에 삽입, 삭제를 반복적으로 실행한다
  while (stack.length < number.length - k || head < number.length) {
    //스택에 있는 수와 number의 수를 비교한다
    //스택에 있는 수가 number의 수보다 작다면
    if (stack[stack.length - 1] < number[head] && cnt) {
      //스택에 있는 수를 빼주고 숫자를 하나 제거했으므로 cnt를 하나 감소시킨다
      stack.pop();
      cnt--;
      //head를 증가시키지 않은 상태에서 number[head]와 스택에 남아있는 수들을 반복적으로 비교한다
      continue;
    }
    stack.push(number[head++]);
  }
  return stack.slice(0, number.length - k).join("");
}

const number = "4177252841";
const k = 4;

console.log(solution(number, k));
