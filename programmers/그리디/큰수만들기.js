function solution(number, k) {
  var answer = "";
  //가장 큰 수
  let biggestNumber = 0;
  //인덱스 변수
  let start = 0;
  let end = k + 1;
  //자릿수로 올 수 있는 수 중 가장 큰 수
  let big = 0;
  let numbers = [];
  //number를 숫자로 만들어 배열에 포함시키기
  for (let i = 0; i < number.length; i++) {
    numbers.push(parseInt(number[i]));
  }
  //console.log(numbers);
  let idx = 0;
  //각 자릿수의 큰 수 찾기 (필요한 자릿수 만큼 반복)
  for (let i = 1; i <= numbers.length - k; i++) {
    //자릿수로 올 수 있는 수 중 가장 큰 수 구하기
    big = Math.max(...numbers.slice(start, end));
    //가장 큰 수의 인덱스 구하기
    idx = numbers.indexOf(big, start);
    //answer 업데이트
    biggestNumber += big * Math.pow(10, numbers.length - k - i);
    start = idx + 1;
    end++;
  }
  //가장 큰 수를 문자열로 만들어주기
  answer = String(biggestNumber);
  return answer;
}

const number = "4177252841";
const k = 4;

console.log(solution(number, k));
